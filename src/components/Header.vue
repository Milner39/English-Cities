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

    display: flex;
    justify-content: center;
    align-content: center;
  }

  .header > * {
    margin: 0;
  }
</style>