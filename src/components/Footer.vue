<template>
  <div class="footer">
    <slot></slot>
    <div class="links__container">

      <div class="section">
        <h2 class="section-title">About Finn</h2>
        <div class="section-links">
          <a class="link">Link</a>
          <a class="link">Link</a>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Website Information</h2>
        <div class="section-links">
          <a class="link">LINK</a>
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
        <div class="section-links">
          <a class="link">Link</a>
          <a class="link">Link</a>
          <a class="link">Link</a>
          <a class="link">Link</a>
        </div>
      </div>

    </div>
  </div>
</template>
  
<script>
    
  export default {
    name: "Footer"
  }
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
    gap: 32px;
  }

  .section {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
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
    flex-direction: column;
    gap: 8px;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>