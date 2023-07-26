<template>
  <Header>
    <h1>English Cites</h1>
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
  import Nav from "./components/Nav.vue"
  import NavLink from "./components/NavLink.vue"
  import CityPage from "./components/CityPage.vue"
  import Footer from "./components/Footer.vue"
  import AccordionGroup from "./components/AccordionGroup.vue"
  import Map from "./components/Map.vue"

</script>

<style>

</style>