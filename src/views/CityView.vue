<template>
  <CityPage>
    <template #side>
      <h1 class="title">{{ city }}</h1>
      <div>
        <h4 class="subheading">Weather</h4>
        <Chart :cityName="city" cavasId="weather" :chartOptions='{
          label: "",
          suggestedMax: 100,
        }'/>
      </div>
      <div>
        <h4 class="subheading">Air Quality - Lower is better</h4>
        <Chart :cityName="city" cavasId="airQuality" :chartOptions='{
          label: "AQI",
          suggestedMax: 250,
        }'/>
      </div>
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
  .subheading {
    padding-left: var(--space-3);
    padding-bottom: var(--space-6);
  }
</style>