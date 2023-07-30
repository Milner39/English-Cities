<template>
  <div class="footer">
    <div v-if="props.sections.links" class="links__container">
      <slot name="links"></slot>
    </div>
  </div>
</template>
  
<script setup>
  const props = defineProps(["sections"])
</script>
  
<style>
  .footer {
    width: 100%;
    background-color: hsl(210, 50%, 25%);

    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;
  }

  .links__container {
    --margin: var(--space-2);
    margin: var(--margin);
    display: flex;
    gap: var(--space-1);
  }

  .section {
    position: relative;
    display: flex;
    gap: var(--space-3);
    flex-direction: column;

  }

  .section:not(:first-child)::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: hsl(210, 0%, 50%);;
    left: calc(var(--space-1) * -0.5);
  }

  .section-links {
    display: flex;
    gap: var(--space-3);
  }

  .section-links:not(.icons) {
    flex-direction: column;
    gap: var(--space-5);
  }

  .link * {
    color: hsl(210, 50%, 80%)
  }

  .link:hover {
    text-decoration: underline;
  }

  .link > svg {
    fill: hsl(210, 50%, 80%);
    width: 32px;
    height: 32px;
  }

  .link > svg .svg-fill {
    fill: hsl(210, 50%, 80%);
  }


  @media (max-width: 1024px) {
    .footer {
      display: flex;
      justify-content: flex-start;
    }
    .links__container {
      flex-direction: column;
      width: calc(100% - var(--margin) * 2);
    }
    .section.section::before {
      width: 100%;
      height: 2px;
      top: calc(var(--space-1) * -0.5);
      left: initial;
    }
  }
</style>