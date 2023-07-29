<template>
  <Header>
    <SlideShow :slideData="slides"/>
  </Header>
  <Nav>
    <template #nav-links>
      <NavLink class="mobile">
        <router-link to="/"><h6>Home</h6></router-link>
      </NavLink>
      <NavLink>
        <router-link to="/city/london"><h6>London</h6></router-link>
      </NavLink>
      <NavLink>
        <router-link to="/city/manchester"><h6>Manchester</h6></router-link>
      </NavLink>
      <NavLink>
        <router-link to="/city/newcastle"><h6>Newcastle</h6></router-link>
      </NavLink>
    </template>
    <template #call-to-action>
      <NavLink class="mobile">
        <router-link to="/contact"><h6>Contact Us</h6></router-link>
      </NavLink>
    </template>
  </Nav>
  <RouterView :key="$route.fullPath"/> 
  <Footer>
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
  </Footer>
</template>

<script setup>

  import Header from "./components/Header.vue"
  import SlideShow from "./components/SlideShow.vue"
  import Nav from "./components/Nav.vue"
  import NavLink from "./components/NavLink.vue"
  import Footer from "./components/Footer.vue"

  import indeed from "../public/svgs/indeed.vue"
  import discord from "../public/svgs/discord.vue"
  import github from "../public/svgs/github.vue"
 

  const slides = [
    {
      text: "London",
      imagePath: "../images/banner/img1.jpg"
    },
    {
      text: "Newcastle",
      imagePath: "../images/banner/img2.jpg"
    },
    {
      text: "Manchester",
      imagePath: "../images/banner/img3.jpg"
    }
  ]

</script>

<style>

</style>