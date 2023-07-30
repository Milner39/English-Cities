<template>
  <div class="chart__container">
    <canvas :id="props.cavasId"></canvas>
  </div>
</template>
    
<script setup>
  import { onMounted } from "vue"
  import Chart from "chart.js/auto"

  const props = defineProps(["cityName", "cavasId", "chartOptions",])

  const apiKey = "+Tg5CAeiWOIuy3D9NtnUAw==TH4GlzkxP5N3ceHj"
  const request = {
    method: "GET",
    headers: { 
      "X-Api-Key": apiKey,
    },
  }

  const formatText = (text) => {
    return text.charAt(0).toUpperCase() + text.slice(1).replace(/_/g, " ")
  }

  onMounted(async() => {

    const cityName = props.cityName
    const cavasId = props.cavasId
    const chartOptions = props.chartOptions


    const endPoints = {
      weather: "https://api.api-ninjas.com/v1/weather?city=" + cityName,
      airQuality: "https://api.api-ninjas.com/v1/airquality?city=" + cityName
    }

    const response = await fetch(endPoints[cavasId], request)
    let data =  await response.json()


    let dataArray = []
    let index = 0
    if (props.cavasId === "weather") {
      const included = ["max_temp", "temp", "min_temp", "feels_like", "humidity", "wind_speed"]
      for (let key in data) {
        if (included.includes(key)) {
          dataArray[included.indexOf(key)] = {
            x: formatText(key),
            y: data[key]
          }
        }
      }
    } else if (props.cavasId === "airQuality") {
      for (let key in data) {
        if (key === "overall_aqi") {
            dataArray[index] = {
            x: formatText(key),
            y: data[key]
          }
        } else {
          dataArray[index] = {
            x: formatText(key),
            y: data[key]["aqi"]
          }
        }
        index++
      }
    }

    let width, height, gradient;
    function getGradient(ctx, chartArea, alpha) {
      const chartWidth = chartArea.right - chartArea.left;
      const chartHeight = chartArea.bottom - chartArea.top;
      if (!gradient || width !== chartWidth || height !== chartHeight) {
        // Create the gradient because this is either the first render
        // or the size of the chart has changed
        width = chartWidth;
        height = chartHeight;
        const colors = [
          "54, 162, 235",
          "255, 205, 86",
          "255, 99, 132",
        ]
        gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
        gradient.addColorStop(0, `rgba(${colors[0]}, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(${colors[1]}, ${alpha}`);
        gradient.addColorStop(1, `rgba(${colors[2]}, ${alpha}`);
      }
      return gradient;
    }

    const plugin = {
    id: "customCanvasBackgroundColor",
      beforeDraw: (chart, args, options) => {
        const {ctx} = chart;
        ctx.save();
        ctx.globalCompositeOperation = "destination-over";
        ctx.fillStyle = options.color || "#99ffff";
        ctx.fillRect(0, 0, chart.width, chart.height);
        ctx.restore();
      }
    };

    
    Chart.defaults.color = "#fff";
    new Chart(
      document.getElementById(props.cavasId),
      {
        type: "bar",
        data: {
          labels: dataArray.map(index => index.x),
          datasets: [
            {
              label: chartOptions.label,
              data: dataArray.map(index => index.y),
              backgroundColor: function(context) {
                const chart = context.chart
                const {ctx, chartArea} = chart
                if (!chartArea) {
                  // This case happens on initial chart load
                  return
                }
                return getGradient(ctx, chartArea, 0.9)
              }
            }
          ]
        },
        options: {
          scales: {
            y: {
              suggestedMax: chartOptions.suggestedMax
            }
          },
          devicePixelRatio: 1.5,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            customCanvasBackgroundColor: {
              color: "hsl(210, 50%, 20%)"
            }
          }
        },
        plugins: [plugin]
      }
    )
  })
  
</script>
  
<style>
  .chart__container {
    aspect-ratio: 2/1;
    background-color: hsl(210, 50%, 20%);
    border-radius: var(--space-3);
    overflow: hidden;
  }
  .chart__container > canvas {
    padding: var(--space-3);
  }
</style>