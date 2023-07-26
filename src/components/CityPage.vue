<template>
    <div class="city">
      <div class="side">
        <div class="page">
          <slot name="side"></slot>
        </div>
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

  .main > *:not(.tab-bar) {
    width: 95%;
    padding: 1% 0;
    margin: 0 auto;

  }

  .city > .side{
    background-color: hsl(210, 50%, 30%);
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .side > .page {
    width: 90%;
    padding-top: 40px;
  }

</style>