<template>
  <div class="get-started">
    <h1>Click a location to get started!</h1>
  </div>
</template>

<script setup>

  import CityPage from '../components/CityPage.vue';
  import AccordionGroup from '../components/AccordionGroup.vue';
  import TabBar from '../components/TabBar.vue';
  import Map from '../components/Map.vue';

</script>

<style>
  .get-started {
    width: 100%;
    height: 80vh;

    background-color: hsl(210, 50%, 20%);

    display: grid;
    place-content: center;
  }

  .get-started > * {
    color: white;
  }

</style>
