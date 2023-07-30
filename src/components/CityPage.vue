<template>
    <div class="city-page">
      <div class="side">
        <slot name="side"></slot> 
      </div>
      <div class="main">
        <slot name="main"></slot>
      </div>
    </div>
</template>
  
<script setup>

</script>
  
<style>
  .city-page {
    width: 100%;
    background-color: hsl(210, 50%, 20%);

    display: grid;
    grid-template-columns: 40% 60%;
  }

  .side {
    padding: var(--space-3);

    background-color: hsl(210, 50%, 30%);

    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .side > .title {
    position: relative;
  }

  .side > .title::before {
    content: "";

    display: flex;

    width: 90%;
    height: var(--space-6);
    position: absolute;

    background-color: white;
  }

  .side > .title::after {
    content: "";

    display: flex;

    width: 75%;
    height: var(--space-6);
    position: absolute;

    background-color: white;
  }

  .main {
    padding: var(--space-3);

    background-color: hsl(210, 50%, 20%);
    
    display: flex;
    flex-direction: column;
    gap: var(--space-2);
  }

  .main > *:not(.tab-bar):not(:last-child) {
    
  }

  @media (max-width: 1024px) {
    .city-page {
      grid-template-columns: none;
    }
  }
</style>