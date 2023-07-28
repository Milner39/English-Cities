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
        title: "Beetham Tower",
        text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        imagePath: "../images/beethamTower.jpg"
      },
      {
        title: "The Printworks",
        text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        imagePath: "../images/thePrintworks.jpg"
      },
      {
        title: "Urbis",
        text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        imagePath: "../images/urbis.jpg"
      },
      {
        title: "Central Library",
        text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
        imagePath: "../images/centralLibrary.jpg"
      },
    ]
  
    const tabs = [
      {
        title: "About",
        header: "ABOUT",
        text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
      },
      {
        title: "Landmarks",
        header: "LANDMARKS",
        text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
      },
      {
        title: "Travel",
        header: "TRAVEL",
        text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
      }
    ]
  
  </script>
  
  
  <style scoped>
  
  </style>