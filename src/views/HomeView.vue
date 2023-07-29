<template>
  <div class="get-started">
    <div class="cards-container">

      <div class="card">
        <div class="card-image__container">
          <img src="/images/img1.jpg" class="card-image">
        </div>
        <div class="card-body">
          <div class="card-text__container">
            <h4 class="card-title">London</h4>
            <p class="card-description">Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
          <router-link to="/london" class="button go"><h5>GO</h5></router-link>
        </div>
      </div>

      <div class="card">
        <div class="card-image__container">
          <img src="/images/img3.jpg" class="card-image">
        </div>
        <div class="card-body">
          <div class="card-text__container">
            <h4 class="card-title">Manchester</h4>
            <p class="card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
          <router-link to="/manchester" class="button go"><h5>GO</h5></router-link>
        </div>
      </div>

      <div class="card">
        <div class="card-image__container">
          <img src="/images/img2.jpg" class="card-image">
        </div>
        <div class="card-body">
          <div class="card-text__container">
            <h4 class="card-body__title">Newcastle</h4>
            <p class="card-description">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
          </div>
          <router-link to="/newcastle" class="button go"><h5>GO</h5></router-link>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>

</script>

<style>
  .get-started {
    background-color: hsl(210, 50%, 20%);

    display: flex;
    justify-content: center;
    
  }
  .cards-container {
    max-width: 100%;
    margin: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
  }

  .card {
    max-width: 300px;
    height: 100%;
    background-color: hsl(210, 50%, 25%);
    border-radius: 16px;
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

  @media (max-width: 1000px) {
    .cards-container {
      flex-direction: column;
    }
    .card {
      height: fit-content;
    }
  }

</style>
