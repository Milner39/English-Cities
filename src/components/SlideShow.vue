<template>
  <div class="slideshow__container">
    <div v-for="(slide, index) in slides" :key="slide.text+index" class="slide fade">
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
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }
  })

  

</script>

<style scoped>

  .slideshow__container {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .slide {
    width: 100%;
    display: none;
  }
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  @keyframes fade {
    from {opacity: .1}
    to {opacity: 1}
  }

  .slide > img {
    width: 100%;
    max-height: 30vh;
    object-fit: cover;
  }

</style>