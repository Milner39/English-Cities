<template>
  <Header />
  <Nav />
  <CityPage>

  </CityPage>
  <Footer />
  <div class="idk">
    <Map :cityName="cityName" :coords="coords"/>
  </div>
</template>

<script>

  import Header from "./components/Header.vue"
  import Nav from "./components/Nav.vue"
  import CityPage from "./components/CityPage.vue"
  import Footer from "./components/Footer.vue"
  import AccordionGroup from "./components/AccordionGroup.vue"
  import Map from "./components/Map.vue"

  const cityName = "London"
  const apiKey = "+Tg5CAeiWOIuy3D9NtnUAw==TH4GlzkxP5N3ceHj"             // process.env.VUE_APP_API_KEY      // Figure out how to import a var from a .env file ASAP!
  const request = {
    method: "GET",
    headers: { "X-Api-Key": apiKey },
  }
  // Commented out so to not use unnessasary api calls when developing
  //const response = await fetch("https://api.api-ninjas.com/v1/city?name=" + cityName, request)
  //const data = await response.json()
  const data = [{name: "London", population: 10979000, latitude: 51.5072, longitude: -0.1275}]
  //console.log(data)
  
  export default {
    name: "App",
    components: {
      Header,
      Nav,
      CityPage,
      Footer,
      AccordionGroup,
      Map
    },
    data() {
      return {
        cityName: cityName,
        coords: [data[0].latitude, data[0].longitude]
      }
    }
  }
</script>

<style>
  .idk {
    position: relative;
    height: 100vh;
  }
</style>