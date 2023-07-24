<template>
  <div class="map container">
    <div id="mapId" class="map"></div>
  </div>
</template>
  
<script>
  import { onMounted } from "vue"
  import leaflet from "leaflet"
  export default {
    name: "Map",
    props: {
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
        }).addTo(myMap);
      })
    }
  }
</script>

<style>
  .map.container {
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