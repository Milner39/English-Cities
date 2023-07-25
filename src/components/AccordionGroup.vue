<template>
  <div class="accordion-group">
    <div v-for="(accordion, index) in accordions" :key="accordion.title" class="accordion">
      <button
        :class="[
          'accordion-title',
          {
            active: accordion.isExpanded,
          },
        ]"
          @click="handleAccordion(index)"
      >
        {{ accordion.title }}
      </button>
        <Collapse as="section" :when="accordion.isExpanded" class="accordion-expanded">
          <p class="accordion-text">
            {{ accordion.text }}
          </p>
          <div class="image-container">
            <img :src="accordion.imagePath" class="accordion-image"/>
          </div>
        </Collapse>
    </div>
  </div>
</template>

<script setup>
  import { reactive } from "vue"
  import { Collapse } from "vue-collapsed"

  const fakeData = [
    {
      title: "Big Ben",
      text: "Wow, so cool",
      imagePath: "../images/bigBen.jpg"
    },
    {
      title: "London Eye",
      text: "Cool but doesn't look like an eye",
      imagePath: "../images/londonEye.jpg"
    },
    {
      title: "Tower Bridge",
      text: "Very cool",
      imagePath: "../images/towerBridge.jpg"
    }
  ]

  const accordions = reactive(
    fakeData.map(({ title, text, imagePath }, index) => ({
      title,
      text,
      imagePath,
      isExpanded: index === 0
    }))
  )

  function handleAccordion(selectedIndex) {
    accordions.forEach((_, index) => {
      accordions[index].isExpanded = index === selectedIndex ? !accordions[index].isExpanded : false
    })
  }

</script>

<style>
  .accordion-group {
    width: 100%;
  }

  .accordion-group > *:nth-child(1) {
    border-style: solid;
    border-color: hsl(210, 50%, 80%);
    border-width: 1px 0;
  }

  .accordion-group > *:not(:nth-child(1)) {
    border-style: solid;
    border-color: hsl(210, 50%, 80%);
    border-width: 0 0 1px 0;
  }

  .accordion-title {
    width: 100%;
    height: 30px;
    background-color: hsl(210, 50%, 20%);
    border: none;
    display: grid;
    place-content: center;
    color: white;
    font-size: 20px;
    padding: 20px
  }

  .accordion-title:hover {
    color: hsl(210, 50%, 80%);
  }
  .accordion-title.active {
    color: hsl(210, 50%, 80%);
  }

  .accordion-expanded {
    background-color: hsl(210, 50%, 20%);

    transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
  }

  .accordion-text {
    color: rgb(180, 180, 180);
    margin: 0;
    padding: 10px;
  }

  .image-container {
    width: 100%;
  }

  .image-container > img {
    width: 100%;
  }
</style>