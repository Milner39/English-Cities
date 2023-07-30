<template>
    <router-link :to="path" class="nav-link">
      <slot></slot>
    </router-link>
</template>
    
<script setup>
  import { RouterLink } from 'vue-router';

  const props = defineProps(["path"])
</script>
    
<style>
  .nav-link {
    height: 100%;
    border-radius: var(--space-3);

    background-color: hsl(210, 50%, 20%);
    
    transition: transform 50ms ease-in-out;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-link > * {
    margin: var(--space-3);
    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-link:hover {
    transform: scale(1.1);
  }

  .nav-link:active {
    transform: scale(1);
  }
</style>