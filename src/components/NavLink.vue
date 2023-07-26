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
    height: 80%;
    aspect-ratio: 2/1;
    border-radius: 100px;
    margin: 0 1%;

    background-color: hsl(210, 50%, 20%);
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 50ms ease-in-out;
  }

  .nav-link > * {
    color: white;
    text-decoration: none;
  }

  .nav-link:hover {
    transform: scale(1.1);
  }

  .nav-link:active {
    transform: scale(1);
  }
</style>