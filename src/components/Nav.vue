<template>
  <div class="nav">
    <div class="nav-link__container">
      <slot name="nav-links"></slot>
    </div>
    <div class="call-to-action__container">
      <slot name="call-to-action"></slot>
    </div>
  </div>
</template>
  
<script setup>
  
</script>
  
<style>
  .nav {
    width: 100%;
    background-color: hsl(210, 50%, 25%);

    position: sticky;
    z-index: 1000;
    top: 0px;

    display: grid;
    grid-template-columns: 80% 20%;

    padding: var(--space-3) 0;
  }

  .nav-link__container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: var(--space-3);

    margin-left: var(--space-3);
  }

  .call-to-action__container {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    margin-right: var(--space-3);
  }

  @media (max-width: 800px) {
    .nav {
      grid-template-columns: 1fr 1fr;
    }
    
    .nav-link:not(.mobile) {
      display: none;
    }
  }
</style>