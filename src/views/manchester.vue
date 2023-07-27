<template>
    <CityPage>
      <template #side>
        <h1 class="title">Manchester</h1>
        <Chart cityName="Manchester"/>
        <AccordionGroup :accordionData="accordions"/>
      </template>
      <template #main>
        <TabBar :tabData="tabs"/>
        <Map cityName="Manchester"/>
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
        title: "Landmark1",
        text: "Wow, so cool",
        imagePath: ""
      },
      {
        title: "Landmark2",
        text: "Super cool",
        imagePath: ""
      },
      {
        title: "Landmark3",
        text: "Very cool",
        imagePath: ""
      }
    ]
  
    const tabs = [
      {
        title: "About",
        header: "ABOUT",
        text: "This text has general info on Manchester"
      },
      {
        title: "Landmarks",
        header: "LANDMARKS",
        text: "This text has general info on landmarks in Manchester"
      },
      {
        title: "Travel",
        header: "TRAVEL",
        text: "This text has general info on travel in Manchester"
      }
    ]
  
  </script>
  
  
  <style scoped>
  
  </style>