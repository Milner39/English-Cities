<template>
  <div class="footer">
    <slot></slot>
    <div class="links__container">

      <div class="section">
        <h4 class="section-title">About Me</h4>
        <div class="section-links">
          <a class="link">Link</a>
          <a class="link">Link</a>
        </div>
      </div>

      <div class="section">
        <h4 class="section-title">Website Information</h4>
        <div class="section-links">
          <a class="link">Link</a>
          <a class="link">Link</a>
          <a class="link">Link</a>
          <a class="link">Link</a>
        </div>
      </div>

      <div class="section">
        <h4 class="section-title">Contact Information</h4>
        <div class="section-links">
          <a class="link">Link</a>
        </div>
      </div>

      <div class="section">
        <h4 class="section-title">Stay Connected</h4>
        <div class="section-links icons">
          <a class="link"><indeed/></a>
          <a class="link"><discord/></a>
          <a class="link"><github/></a>
        </div>
      </div>

    </div>
  </div>
</template>
  
<script setup>
  import indeed from "../../public/svgs/indeed.vue"
  import discord from "../../public/svgs/discord.vue"
  import github from "../../public/svgs/github.vue"
</script>
  
<style>
  .footer {
    width: 100%;
    background-color: hsl(210, 50%, 25%);

    display: grid;
    place-content: center;
  }

  .links__container {
    padding: var(--space-2);
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

  .link {
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

  @media (max-width: 800px) {
    .footer {
      display: flex;
      justify-content: flex-start;
    }
    .links__container {
      flex-direction: column;
      width: 100%;
    }
    .section.section::before {
      width: 100%;
      height: 2px;
      top: calc(var(--space-1) * -0.5);
      left: initial;
    }
  }
</style>