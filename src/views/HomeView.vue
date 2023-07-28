<template>
  <div class="get-started">
    <div class="cards-container">

      <div class="card">
        <div class="card-image__container">
          <img src="/images/img1.jpg" class="card-image">
        </div>
        <div class="card-body">
          <div class="card-text__container">
            <h1 class="card-title">London</h1>
            <p class="card-description">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
          <router-link to="/london" class="button go">Go</router-link>
        </div>
      </div>

      <div class="card">
        <div class="card-image__container">
          <img src="/images/img3.jpg" class="card-image">
        </div>
        <div class="card-body">
          <div class="card-text__container">
            <h1 class="card-title">Manchester</h1>
            <p class="card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
          <router-link to="/manchester" class="button go">Go</router-link>
        </div>
      </div>

      <div class="card">
        <div class="card-image__container">
          <img src="/images/img2.jpg" class="card-image">
        </div>
        <div class="card-body">
          <div class="card-text__container">
            <h1 class="card-body__title">Newcastle</h1>
            <p class="card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
          <router-link to="/newcastle" class="button go">Go</router-link>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>

</script>

<style>
  .get-started {
    width: 100%;

    background-color: hsl(210, 50%, 20%);

    display: flex;
    justify-content: center;
    
  }
  .cards-container {
    padding: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .card {
    width: 300px;
    height: 100%;
    background-color: hsl(210, 50%, 25%);
    border-radius: 16px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .card-image {
    width: 100%;
    height: 100%;

    object-fit: cover;
  }

  .card-body {
    height: 100%;
    padding: 16px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .card-description {
    color: hsl(210, 0%, 50%);
    padding-top: 16px;
  }

  .button.go {
    background-color: hsl(210, 50%, 20%)
  }

  .card-text__container{ 
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }

</style>
