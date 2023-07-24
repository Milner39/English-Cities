<template>
  <Map :coords="coords"/>
</template>

<script>

  import Map from "./components/map.vue"

  const cityName = "london"
  const apiKey = ""   // Get from API Ninjas            // Figure out how to import a var from a .env file ASAP!
  const request = {
    method: "GET",
    headers: { "X-Api-Key": apiKey },
  }
  // Commented out so to not use unnessasary api calls when developing
  //const response = await fetch("https://api.api-ninjas.com/v1/city?name=" + cityName, request)
  const data = {name: "london", population: 10979000, latitude: 51.5072, longitude: -0.1275}  //await response.json()

  export default {
    name: "App",
    components: {
      Map
    },
    data() {
      return {
        coords: [data.latitude, data.longitude]
      }
    }
  }
</script>
