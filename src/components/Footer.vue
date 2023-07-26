<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>
  
<script>
    
  export default {
    name: "Footer"
  }
</script>
  
<style>
  .footer {
    width: 100%;
    aspect-ratio: 15/1;
    min-height: 80px;
    max-height: 160px;
    background-color: hsl(210, 50%, 25%);
    display: grid;
    place-content: center;
  }

  .footer > * {
    margin: 0;
    color: white;
  }
</style>