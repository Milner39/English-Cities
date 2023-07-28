<template>
  <CityPage>
    <template #side>
      <h1 class="title">Newcastle</h1>
      <Chart cityName="Newcastle"/>
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
  import Chart from '../components/Chart.vue';
  import AccordionGroup from '../components/AccordionGroup.vue';
  import TabBar from '../components/TabBar.vue';
  import Map from '../components/Map.vue';



  const accordions = [
    {
      title: "Grays' Monument",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imagePath: "../images/graysMonument.jpg"
    },
    {
      title: "Millennium Bridge",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imagePath: "../images/millenniumBridge.jpg"
    },
    {
      title: "St James' Park",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.",
      imagePath: "../images/stJamesPark.jpg"
    }
  ]

  const tabs = [
    {
      title: "About",
      header: "ABOUT",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
    },
    {
      title: "Landmarks",
      header: "LANDMARKS",
      text: "Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet."
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