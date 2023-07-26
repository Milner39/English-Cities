<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script setup>
  
</script>

<style >
  .header {
    width: 100%;
    background-color: hsl(210, 50%, 20%);
    /* 
    aspect-ratio: 5/1;
    min-height: 120px;
    max-height: 240px;
    */

    display: flex;
    justify-content: center;
    align-content: center;
  }

  .header > * {
    margin: 0;
    color: white;
  }
</style>