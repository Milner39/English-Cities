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
        <router-link to="/london"><h6>London</h6></router-link>
      </NavLink>
      <NavLink>
        <router-link to="/manchester"><h6>Manchester</h6></router-link>
      </NavLink>
      <NavLink>
        <router-link to="/newcastle"><h6>Newcastle</h6></router-link>
      </NavLink>
    </template>
    <template #call-to-action>
      <NavLink class="mobile">
        <router-link to="/contact"><h6>Contact Us</h6></router-link>
      </NavLink>
    </template>
  </Nav>
  <RouterView/>
  <Footer>
    
  </Footer>
</template>

<script setup>

  import Header from "./components/Header.vue"
  import SlideShow from "./components/SlideShow.vue"
  import Nav from "./components/Nav.vue"
  import NavLink from "./components/NavLink.vue"
  import Footer from "./components/Footer.vue"

  const slides = [
    {
      text: "London",
      imagePath: "../images/img1.jpg"
    },
    {
      text: "Newcastle",
      imagePath: "../images/img2.jpg"
    },
    {
      text: "Manchester",
      imagePath: "../images/img3.jpg"
    }
  ]

</script>

<style>

</style>