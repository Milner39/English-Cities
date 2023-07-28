<template>
  <Header>
    <SlideShow :slideData="slides"/>
  </Header>
  <Nav>
    <template #nav-links>
      <NavLink>
        <router-link to="/"><h4>Home</h4></router-link>
      </NavLink>
      <NavLink>
        <router-link to="/london"><h4>London</h4></router-link>
      </NavLink>
      <NavLink>
        <router-link to="/manchester"><h4>Manchester</h4></router-link>
      </NavLink>
      <NavLink>
        <router-link to="/newcastle"><h4>Newcastle</h4></router-link>
      </NavLink>
    </template>
    <template #call-to-action>
      <NavLink>
        <router-link to="/contact"><h4>Contact Us</h4></router-link>
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