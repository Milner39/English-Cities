<template>
  <CityPage>
    <template #side>
      <h1 class="title">London</h1>
      <h4>Air Pollution</h4>
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
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imagePath: "../images/bigBen.jpg"
    },
    {
      title: "London Eye",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imagePath: "../images/londonEye.jpg"
    },
    {
      title: "Tower Bridge",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imagePath: "../images/towerBridge.jpg"
    }
  ]

  const tabs = [
    {
      title: "About",
      header: "ABOUT",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
      title: "Landmarks",
      header: "LANDMARKS",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
      title: "Travel",
      header: "TRAVEL",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    }
  ]

</script>


<style scoped>

</style>