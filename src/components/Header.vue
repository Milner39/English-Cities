<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
  
  export default {
    name: "Header"
  }
</script>

<style >
  .header {
    width: 100%;
    aspect-ratio: 5/1;
    min-height: 120px;
    max-height: 240px;
    background-color: hsl(210, 50%, 20%);
    display: grid;
    place-content: center;
  }

  .header > * {
    margin: 0;
    color: white;
  }
</style>