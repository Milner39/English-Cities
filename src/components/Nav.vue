<template>
  <div class="nav">
    <div class="nav-link__container">
      <slot name="nav-links"/>
      <div class="search-bar">
        <form class="search-form">
          <input type="text" id="search" placeholder="Search for city..." class="search">
          <input type="submit" style="display: none;" @click="search()">
        </form>
      </div>
    </div>
    <div class="call-to-action__container">
      <slot name="call-to-action"/>
    </div>
  </div>
</template>
  
<script setup>

 import { useRouter } from 'vue-router'
 const router = useRouter()

  const search = () => {
    const city = document.getElementById("search").value
    //router.push("city/" + city)
    const url = window.location.origin + "/city/" + city
    window.open(url)
  }
  
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

  .search-bar {
    height: 100%;
    width: 100%;
    background-color: hsl(210, 50%, 20%);
    padding: var(--space-5);
    border-radius: var(--space-3);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .search-form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--space-3);
  }

  .search {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background-color: hsl(210, 50%, 20%);
    font-size: 16px;
  }
</style>