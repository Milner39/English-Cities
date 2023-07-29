<template>
  <CityPage>
    <template #side>
      <h1 class="title">{{ city }}</h1>
      <h4>Air Quality - Lower is better</h4>
      <Chart :cityName="city"/>
      <AccordionGroup :cityName="city"/>
    </template>
    <template #main>
      <TabBar :cityName="city"/>
      <Map :cityName="city"/>
    </template>
  </CityPage>
</template>
  
<script setup>
  
  import { useRoute } from 'vue-router'
  
  import CityPage from '../components/CityPage.vue';
  import Chart from '../components/Chart.vue';
  import AccordionGroup from '../components/AccordionGroup.vue';
  import TabBar from '../components/TabBar.vue';
  import Map from '../components/Map.vue';

  const route = useRoute()
  let city = route.params.city
  city = city.charAt(0).toUpperCase() + city.slice(1)
  
</script>
  
<style>

</style>