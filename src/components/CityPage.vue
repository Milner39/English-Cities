<template>
    <div class="city">
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
  .city {
    width: 100%;
    min-height: 80vh;
    background-color: hsl(210, 50%, 20%);

    display: grid;
    grid-template-columns: 30% 70%;
  }

  .main {
    background-color: hsl(210, 50%, 20%);
    
    padding: 16px;
  }

  .main > *:not(.tab-bar):not(:last-child) {
    margin-bottom: 16px;
  }

  .side {
    background-color: hsl(210, 50%, 30%);

    padding: 16px;
  }

  .side > *:not(:last-child) {
    margin-bottom: 16px;
  }

  .side > .title {
    position: relative;
  }

  .side > .title::before {
    content: "";

    display: flex;

    width: 90%;
    height: 1px;
    position: absolute;

    background-color: white;
  }

  .side > .title::after {
    content: "";

    display: flex;

    width: 75%;
    height: 1px;
    position: absolute;

    background-color: white;
  }
</style>