<template>
  <CityPage>
    <template #side>
      <h1 class="title">London</h1>
      <Chart cityName="London"/>
      <AccordionGroup :accordionData="accordions"/>
    </template>
    <template #main>
      <TabBar :tabData="tabs"/>
      <Map cityName="London"/>
    </template>
  </CityPage>
</template>

<script setup>

  import { ref, onMounted } from 'vue'

  import CityPage from '../components/CityPage.vue';
  import Chart from '../components/Chart.vue';
  import AccordionGroup from '../components/AccordionGroup.vue';
  import TabBar from '../components/TabBar.vue';
  import Map from '../components/Map.vue';

 

  const accordions = [
    {
      title: "Big Ben",
      text: "Wow, so cool",
      imagePath: "../images/bigBen.jpg"
    },
    {
      title: "London Eye",
      text: "Cool but doesn't look like an eye",
      imagePath: "../images/londonEye.jpg"
    },
    {
      title: "Tower Bridge",
      text: "Very cool",
      imagePath: "../images/towerBridge.jpg"
    }
  ]

  const tabs = [
    {
      title: "About",
      header: "ABOUT",
      text: "This text has general info on London"
    },
    {
      title: "Landmarks",
      header: "LANDMARKS",
      text: "This text has general info on landmarks in London"
    },
    {
      title: "Travel",
      header: "TRAVEL",
      text: "This text has general info on travel in London"
    }
  ]

</script>


<style scoped>

</style>