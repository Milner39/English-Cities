<template>
  <div class="get-started">
    <div class="cards-container">
      <Card>
        <template #image>
          <img src="/images/banner/img1.jpg" class="card-image">
        </template>
        <template #text>
          <h4 class="card-title">London</h4>
          <p class="card-description">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
        </template>
        <template #button>
          <router-link to="/city/london" class="button go"><h5>GO</h5></router-link>
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
          <router-link to="/city/manchester" class="button go"><h5>GO</h5></router-link>
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
          <router-link to="/city/newcastle" class="button go"><h5>GO</h5></router-link>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup>
  import Card from "../components/Card.vue";

</script>

<style>
  .get-started {
    background-color: hsl(210, 50%, 20%);

    display: flex;
    justify-content: center;
    
  }
  .cards-container {
    max-width: 100%;
    margin: var(--space-2);

    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--space-2);
  }

  .card {
    max-width: 300px;
    height: 100%;
    background-color: hsl(210, 50%, 25%);
    border-radius: var(--space-3);
    overflow: hidden;
    display: flex;
    flex-direction: column;

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
    padding: var(--space-3);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .card-description {
    color: hsl(210, 0%, 50%);
  }

  .button.go {
    background-color: hsl(210, 50%, 20%)
  }

  .card-text__container{ 
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }

  .card-text__container > *:not(:first-child){ 
    padding-top: var(--space-3);
  }

  @media (max-width: 1000px) {
    .cards-container {
      flex-direction: column;
    }
    .card {
      height: fit-content;
    } 
  }

</style>
