<template>
    <div class="nav_link">
        
    </div>
</template>
    
<script>
  
  export default {
    name: "NavLink"
  }
</script>
    
<style>
  .nav_link {
    height: 80%;
    aspect-ratio: 2/1;
    border-radius: 100px;

    margin: 0 1%;

    background-color: hsl(210, 50%, 20%);
  }

  .nav_link:hover {
    transform: scale(1.1);
  }

  .nav_link:active {
    transform: scale(1);
  }
</style>