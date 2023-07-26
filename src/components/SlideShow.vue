<template>
  <div class="slideshow__container">
    <div v-for="(slide, index) in slides" :key="slide.text+index" class="slide fade-in">
      <img :src="slide.imagePath" :alt="slide.text">  
    </div>
  </div>
</template>

<script setup>

  import { reactive, onMounted } from "vue"

  const props = defineProps(["slideData"])
  const slideData = props.slideData

  const slides = reactive(
    slideData.map(({ text, imagePath }, index) => ({
      text,
      imagePath
    }))
  )

  onMounted(() => {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let i;
      let slidesE = document.getElementsByClassName("slide");
      for (i = 0; i < slidesE.length; i++) {
        slidesE[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slidesE.length) {slideIndex = 1}
      slidesE[slideIndex-1].style.display = "block";
      setTimeout(showSlides, 5000); // Change image every 2 seconds
    }
  })

  

</script>

<style scoped>

  .slideshow__container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow-x: hidden;
  }

  .slide {
    width: 100%;
    display: none;
  }
  .fade-in {
    animation-name: fade-in;
    animation-duration: 3s;
  }

  @keyframes fade-in {
    /* from {opacity: .5}
    to {opacity: 1} */
    from {transform: translateX(100%)}
    to {transform: translateX(0)}
  }

  .fade-out {
    animation-name: fade-out;
    animation-duration: 1.5s;
  }

  @keyframes fade-out {
    from {transform: translateX(0%)}
    to {transform: translateX(-100%)}
  }

  .slide > img {
    width: 100%;
    max-height: 30vh;
    object-fit: cover;
  }

</style>