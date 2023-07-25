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
      cityName: String,
      coords: Array
    },
    setup(props) {
      let myMap
      onMounted(() => {
        myMap = leaflet.map("mapId").setView(props["coords"], 13)
  
        leaflet.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
        {
          maxZoom: 20,
          attribution: '© OpenStreetMap'
        }).addTo(myMap)
        const circle = leaflet.circle(props["coords"], {
          color: "red",
          fillColor: "#f03",
          fillOpacity: "0.5",
          radius: 1000
        }).addTo(myMap)
        circle.bindPopup(props["cityName"])

      })
    }
  }
</script>

<style>
  .map__container {
    background-color: hsl(210, 50%, 2%);
    width: 75%;
    height: auto;
    aspect-ratio: 2/1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .map {
    position: fixed;
    width: 100%;
    height: 100%;
  }
</style>