<template>
  <div class="nav">
    <div class="nav-link__container">
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
      <NavLink></NavLink>
    </div>
    <div class="call-to-action__container">
      <NavLink></NavLink>
    </div>
  </div>
</template>
  
<script>
  
  import NavLink from './NavLink.vue';

  export default {
      name: "Nav",
      components: {
        NavLink
      }
    }
</script>
  
<style>
  .nav {
    width: 100%;
    aspect-ratio: 20/1;
    min-height: 40px;
    max-height: 60px;
    
    background-color: hsl(210, 50%, 25%);

    position: sticky;
    z-index: 1000;
    top: 0px;

    display: grid;
    grid-template-columns: 70% 25%;
    column-gap: 5%;
  }

  .nav-link__container {
    width: 100%;
    height: 100%;
    

    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .call-to-action__container {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
</style>