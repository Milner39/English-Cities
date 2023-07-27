<template>
  <div class="nav">
    <div class="nav-link__container">
      <slot name="nav-links"></slot>
    </div>
    <div class="call-to-action__container">
      <slot name="call-to-action"></slot>
    </div>
  </div>
</template>
  
<script scoped>
  
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
    background-color: hsl(210, 50%, 25%);

    position: sticky;
    z-index: 1000;
    top: 0px;

    display: grid;
    grid-template-columns: 70% 30%;

    padding: 16px 0;
  }

  .nav-link__container {
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;

    margin-left: 16px;
  }

  .call-to-action__container {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-right: 16px;
  }
</style>