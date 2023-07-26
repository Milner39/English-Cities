<template>
  <Header>
    <SlideShow :slideData="slides"/>
  </Header>
  <Nav>
    <template #nav-links>
      <NavLink>
        <router-link to="/">Home</router-link>
      </NavLink>
      <NavLink>
        <router-link to="/london">London</router-link>
      </NavLink>
      
      <NavLink>
        <router-link to="/newcastle">Newcastle</router-link>
      </NavLink>
    </template>
    <template #call-to-action>
      <NavLink>
        Contact Us
      </NavLink>
    </template>
  </Nav>
  <RouterView/>
  <Footer>
    <h1>FOOTER STUFF</h1>
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
      text: "A",
      imagePath: "../images/img1.jpg"
    },
    {
      text: "B",
      imagePath: "../images/img2.jpg"
    },
    {
      text: "C",
      imagePath: "../images/img3.jpg"
    }
  ]

</script>

<style>

</style>