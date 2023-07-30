<template>
  <div class="home-page">
    <div class="cards-container">
      <Card>
        <template #image>
          <img src="/images/banner/img1.jpg" class="card-image">
        </template>
        <template #text>
          <h4 class="card-title">London</h4>
          <p class="card-description">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </template>
        <template #button>
          <router-link to="/city/london" class="button go"><h6>GO</h6></router-link>
        </template>
      </Card>
      <Card>
        <template #image>
          <img src="/images/banner/img3.jpg" class="card-image">
        </template>
        <template #text>
          <h4 class="card-title">Manchester</h4>
          <p class="card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </template>
        <template #button>
          <router-link to="/city/manchester" class="button go"><h6>GO</h6></router-link>
        </template>
      </Card>
      <Card>
        <template #image>
          <img src="/images/banner/img2.jpg" class="card-image">
        </template>
        <template #text>
          <h4 class="card-body__title">Newcastle</h4>
          <p class="card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </template>
        <template #button>
          <router-link to="/city/newcastle" class="button go"><h6>GO</h6></router-link>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
  import Card from "../components/Card.vue";

</script>

<style>
  .home-page {
    background-color: hsl(210, 50%, 20%);

    display: grid;
    place-content: center;
  }

  .cards-container {
    margin: var(--space-2);

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
    gap: var(--space-2);
  }
</style>
