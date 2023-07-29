<template>
  <div class="map__container">
    <div id="mapId" class="map"></div>
  </div>
</template>
  
<script>
  import { onMounted } from "vue"
  import leaflet from "leaflet"
  
  export default {

    name: "Map",
    props: {
      cityName: String
    },
    setup(props) {

      let myMap
      onMounted(async() => {

        const apiKey = "+Tg5CAeiWOIuy3D9NtnUAw==TH4GlzkxP5N3ceHj"
        const request = {
          method: "GET",
          headers: { "X-Api-Key": apiKey },
        }
        var cityName = props.cityName;
        const response = await fetch("https://api.api-ninjas.com/v1/city?name=" + cityName, request)
        const data =  await response.json()
        const coords = [data[0].latitude, data[0].longitude]


        myMap = leaflet.map("mapId").setView(coords, 13)
        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
        {
          minZoom: 5,
          maxZoom: 20,
          attribution: '© OpenStreetMap'
        }).addTo(myMap)
        const circle = leaflet.circle(coords, {
          color: "hsl(210, 50%, 30%)",
          fillColor: "hsl(210, 50%, 30%)",
          fillOpacity: "0.5",
          radius: 1000
        }).addTo(myMap)
        circle.bindPopup(props.cityName)

      })
    }
  }

</script>

<style>
  .map__container {
    width: 100%;
    height: 512px;

    display: flex;
    justify-content: center;
  }

  .map {
    width: 100%;
    height: 100%;
    border-radius: var(--space-3);
  }

  .leaflet-control-zoom {
    display: none;
  }

  .leaflet-popup-content {
    color: black;
  }

</style>