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

      //console.log("Here", props.cityName)

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
          maxZoom: 20,
          attribution: '© OpenStreetMap'
        }).addTo(myMap)
        const circle = leaflet.circle(coords, {
          color: "red",
          fillColor: "#f03",
          fillOpacity: "0.5",
          radius: 1000
        }).addTo(myMap)
        circle.bindPopup(props.cityName)

      })
    }
  }

</script>

<style scoped>
  .map__container {
    width: 100%;
    height: auto;
    aspect-ratio: 2/1;

    display: flex;
    justify-content: center;
  }

  .map {

    width: 75%;
    height: 100%;
  }
</style>