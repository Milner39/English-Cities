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
    aspect-ratio: 8/1;
    min-height: 100px;
    max-height: 200px;
    background-color: hsl(210, 50%, 25%);
    display: grid;
    place-content: center;
  }

  .footer > * {
    margin: 0;
  }
</style>