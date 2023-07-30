<template>
  <div class="chart__container">
    <canvas id="air-quality"></canvas>
  </div>
</template>
    
<script setup>
  import { onMounted } from "vue"
  import Chart from "chart.js/auto"

  const props = defineProps(["cityName"])

  onMounted(async() => {

    const apiKey = "+Tg5CAeiWOIuy3D9NtnUAw==TH4GlzkxP5N3ceHj"
    const request = {
      method: "GET",
      headers: { "X-Api-Key": apiKey },
    }
    const cityName = props.cityName;
    const response = await fetch("https://api.api-ninjas.com/v1/airquality?city=" + cityName, request)
    const data =  await response.json()


    let airQuality = []
    let index = 0
    for (let key in data) {
      if (key == "overall_aqi") {
        airQuality[index] = {
          type: "Overall AQI",
          aqi: data[key]
        }
        break
      }
      airQuality[index] = {
        type: key,
        aqi: data[key]["aqi"]
      }
      index++
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
      document.getElementById("air-quality"),
      {
        type: "bar",
        data: {
          labels: airQuality.map(row => row.type),
          datasets: [
            {
              label: "AQI",
              data: airQuality.map(row => row.aqi),
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
              suggestedMax: 250
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