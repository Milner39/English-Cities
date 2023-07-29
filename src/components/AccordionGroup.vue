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
        <h6>{{ accordion.title }}</h6>
      </button>
        <Collapse as="section" :when="accordion.isExpanded" class="accordion-expanded">
          <p class="accordion-text">
            {{ accordion.text }}
          </p>
          <div class="image-container">
            <img :src="accordion.imagePath" :alt="accordion.title" class="accordion-image"/>
          </div>
        </Collapse>
    </div>
  </div>
</template>

<script setup>

  import { reactive } from "vue"
  import { Collapse } from "vue-collapsed"

  const props = defineProps(["accordionData"])
  const accordionData = props.accordionData

  const accordions = reactive(
    accordionData.map(({ title, text, imagePath }, index) => ({
      title,
      text,
      imagePath,
      isExpanded: index === null
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

  .accordion {
    border-style: solid;
    border-color: hsl(210, 50%, 80%);
    border-width: 0;
    border-bottom-width: var(--space-6);
  }

  .accordion:first-child {
    border-top-width: var(--space-6);
  }

  .accordion-title {
    width: 100%;
    padding: var(--space-3);
    
    background-color: hsl(210, 50%, 20%);
    border: none;

    display: grid;
    place-content: center;
  }

  .accordion-title:hover > * {
    color: hsl(210, 50%, 80%);
  }
  .accordion-title.active > * {
    color: hsl(210, 50%, 80%);
  }

  .accordion-expanded {
    background-color: hsl(210, 50%, 20%);

    transition: height var(--vc-auto-duration) cubic-bezier(0.3, 0, 0.6, 1);
  }

  .accordion-expanded > * {
    padding: 0 var(--space-3) var(--space-3) var(--space-3);
  }

  .accordion-text {
    color: hsl(210, 0%, 50%);
  }

  .image-container > img {
    width: 100%;
  }

  .accordion-image {
    border-radius: var(--space-3);
  }
</style>