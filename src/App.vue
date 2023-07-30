<template>
  <Header>
    <SlideShow :slideData="slides"/>
  </Header>
  <Nav>
    <template #nav-links>
      <NavLink path="/" class="mobile">
        <h6>Home</h6>
      </NavLink>
      <NavLink path="/city/london">
        <h6>London</h6>
      </NavLink>
      <NavLink path="/city/manchester">
        <h6>Manchester</h6>
      </NavLink>
      <NavLink path="/city/newcastle">
        <h6>Newcastle</h6>
      </NavLink>
    </template>
    <template #call-to-action>
      <NavLink path="/contact" class="mobile">
        <h6>Contact Us</h6>
      </NavLink>
    </template>
  </Nav>
  <RouterView :key="$route.fullPath"/> 
  <Footer :sections="{links: true}">
    <template #links>
      <div class="section">
        <h4 class="section-title">About Me</h4>
        <div class="section-links">
          <a class="link"><h6>Link</h6></a>
          <a class="link"><h6>Link</h6></a>
        </div>
      </div>
      <div class="section">
        <h4 class="section-title">Website Information</h4>
        <div class="section-links">
          <a class="link"><h6>Link</h6></a>
          <a class="link"><h6>Link</h6></a>
          <a class="link"><h6>Link</h6></a>
          <a class="link"><h6>Link</h6></a>
        </div>
      </div>
      <div class="section">
        <h4 class="section-title">Contact Information</h4>
        <div class="section-links">
          <a class="link"><h6>Link</h6></a>
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
    </template>
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