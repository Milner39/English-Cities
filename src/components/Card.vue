<template>
  <div class="card">
    <div class="card-image__container">
      <slot name="image"/>
    </div>
    <div class="card-body">
      <div class="card-text__container">
        <slot name="text"/>
      </div>
      <slot name="button"/>
    </div>
  </div>
</template>

<script setup>

</script>

<style>
  .card {
    width: 100%;
    flex: 0 1 256px;
    display: flex;
    flex-direction: column;

    background-color: hsl(210, 50%, 25%);
    border-radius: var(--space-3);
    overflow: hidden;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);
  }

  .card-image__container {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);
  }

  .card-image {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  .card-body {
    height: 100%;

    display: flex;
    flex-direction: column;
    gap: var(--space-3);

    padding: var(--space-3);
    text-align: center;
  }

  .card-text__container{ 
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: var(--space-3);
  }
  
  .card-description {
    color: hsl(210, 0%, 50%);
  }

  .button.go {
    background-color: hsl(210, 50%, 20%)
  } 
</style>