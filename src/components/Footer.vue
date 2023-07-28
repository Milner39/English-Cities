<template>
  <div class="footer">
    <slot></slot>
    <div class="links__container">

      <div class="section">
        <h2 class="section-title">About Me</h2>
        <div class="section-links">
          <a class="link">Link</a>
          <a class="link">Link</a>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Website Information</h2>
        <div class="section-links">
          <a class="link">Link</a>
          <a class="link">Link</a>
          <a class="link">Link</a>
          <a class="link">Link</a>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Contact Information</h2>
        <div class="section-links">
          <a class="link">Link</a>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Stay Connected</h2>
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
    padding: 32px;
    display: flex;
    gap: 64px;
  }

  .section {
    position: relative;
    display: flex;
    gap: 16px;
    flex-direction: column;

  }

  .section:not(:first-child)::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 100%;
    background-color: hsl(210, 0%, 50%);;
    left: -16px;
  }

  .section-links {
    display: flex;
    gap: 16px;
  }

  .section-links:not(.icons) {
    flex-direction: column;
    gap: 8px;
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
  .link > svg .svg-fill {
    fill: hsl(210, 50%, 80%);
  }
</style>