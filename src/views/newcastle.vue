<template>
  <CityPage>
    <template #side>
      <AccordionGroup :accordionData="accordions"/>
    </template>
    <template #main>
      <TabBar :tabData="tabs"/>
      <Map cityName="Newcastle"/>
    </template>
  </CityPage>
</template>

<script setup>

  import { ref, onMounted } from 'vue'

  import CityPage from '../components/CityPage.vue';
  import AccordionGroup from '../components/AccordionGroup.vue';
  import TabBar from '../components/TabBar.vue';
  import Map from '../components/Map.vue';



  const accordions = [
    {
      title: "Grays' Monument",
      text: "Wow, so cool",
      imagePath: "../images/graysMonument.jpg"
    },
    {
      title: "Millennium Bridge",
      text: "Sorta cool",
      imagePath: "../images/millenniumBridge.jpg"
    },
    {
      title: "St James' Park",
      text: "Very cool",
      imagePath: "../images/stJamesPark.jpg"
    }
  ]

  const tabs = [
    {
      title: "About",
      header: "ABOUT",
      text: "This text has general info on Newcastle"
    },
    {
      title: "Landmarks",
      header: "LANDMARKS",
      text: "This text has general info on landmarks in Newcastle"
    },
    {
      title: "Travel",
      header: "TRAVEL",
      text: "This text has general info on travel in newcastle"
    }
  ]


  //var cityName = ref()
  //onMounted(async() => {
  //  cityName = "fix me!"
  //})

</script>


<style scoped>

</style>