<template>
    <div class="city-page">
      <div class="side">
        <slot name="side"></slot> 
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
    </div>
</template>
  
<script>
  import AccordionGroup from './AccordionGroup.vue';
  import TabBar from './TabBar.vue';
    
  export default {
    name: "CityPage",
    components: {
      AccordionGroup,
      TabBar
    }
  }
</script>
  
<style>
  .city-page {
    width: 100%;
    background-color: hsl(210, 50%, 20%);

    display: grid;
    grid-template-columns: 40% 60%;
  }

  .main {
    background-color: hsl(210, 50%, 20%);
    
    padding: var(--space-3)
  }

  .main > *:not(.tab-bar):not(:last-child) {
    margin-bottom: var(--space-3);
  }

  .side {
    background-color: hsl(210, 50%, 30%);

    padding: var(--space-3);
  }

  .side > *:not(:first-child) {
    margin-top: var(--space-3);
  }

  .side > .title {
    position: relative;
  }

  .side > .title::before {
    content: "";

    display: flex;

    width: 90%;
    height: var(--space-6);
    position: absolute;

    background-color: white;
  }

  .side > .title::after {
    content: "";

    display: flex;

    width: 75%;
    height: var(--space-6);
    position: absolute;

    background-color: white;
  }

  @media (max-width: 900px) {
    .city-page {
      grid-template-columns: none;
    }

    .map__container {
      max-height: 50vh;
    }
  }
</style>