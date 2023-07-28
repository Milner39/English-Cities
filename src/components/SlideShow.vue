<template>
  <div class="slideshow__container">
    <div v-for="(slide, index) in slides" :key="slide.text+index" class="slide">
      <img :src="slide.imagePath" :alt="slide.text" class="slide-image"> 
      <h1 class="slide-text">{{ slide.text }}</h1> 
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

      // Get slides
      let slidesE = document.getElementsByClassName("slide");

      // Get the index of the prev slide
      let i = slideIndex - 1
      if (i == -1) {
        i = slidesE.length - 1
      }

      // Have the previous slide return to normal
      slidesE[i].classList.remove("fade-out")

      // Have the current slide fade out
      slidesE[slideIndex].classList.remove("fade-in")
      slidesE[slideIndex].classList.add("fade-out")

      // Increment slideIndex keeping within:    0 - 3
      slideIndex = slideIndex + 1
      if (slideIndex == slidesE.length) {
        slideIndex = 0
      }

      // Have the next slide fade in
      slidesE[slideIndex].classList.add("fade-in")

      // Change image every 5 seconds
      setTimeout(showSlides, 5000);
    }
  })

  

</script>

<style>

  .slideshow__container {
    width: 100%;
    aspect-ratio: 4/1;
    position: relative;
    overflow-x: hidden;
  }

  .slide {
    width: 100%;
    height: 100%;
    position: absolute;
    overflow-y: hidden;

    display: none;
  }

  .slide-image {
    width: 100%;
    height: 100%;

    filter: brightness(50%);
  }

  .slide-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .slide.fade-in {
    animation-name: fade-in;
    animation-duration: 3s;

    display: block;
    z-index: 10;
  }

  @keyframes fade-in {
    from {transform: translateX(100%)}
    to {transform: translateX(0)}
  }

  .slide.fade-out {
    animation-name: fade-out;
    animation-duration: 3s;

    display: block;
    z-index: 1;
  }

  @keyframes fade-out {
    from {transform: translateX(0%)}
    to {transform: translateX(-100%)}
  }

</style>