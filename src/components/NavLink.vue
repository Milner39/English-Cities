<template>
    <div class="nav-link">
      <slot></slot>
    </div>
</template>
    
<script>
  
  export default {
    name: "NavLink"
  }
</script>
    
<style>
  .nav-link {
    height: 100%;
    aspect-ratio: 2/1;
    border-radius: 1000px;
    margin: 4px;

    background-color: hsl(210, 50%, 20%);
    
    transition: transform 50ms ease-in-out;
  }

  .nav-link > * {
    text-decoration: none;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-link:hover {
    transform: scale(1.1);
  }

  .nav-link:active {
    transform: scale(1);
  }
</style>