<template>
  <div class="tabs__container" v-if="tabs.length != 0">
  <div class="tab-bar">
    <div v-for="(tab, index) in tabs" :key="tab.tabTitle" :class="[
      'tab',
      {
        active: tab.isActive
      }
    ]"
    >
      <div class="tab-title" @click="handleTab(index)">
        <h6>{{ tab.tabTitle }}</h6>
      </div>
    </div>
  </div>
  <div class="tab-pages">
    <div v-for="(tab, index) in tabs" :key="tab.tabTitle" :class="[{ active: selectedIndex === index }]">
      <h4>{{ tab.tabHeader }}</h4>
      <p>
        {{ tab.tabText }}
      </p>
    </div>
  </div>
  </div>
</template>
   
<script setup>

  import { reactive } from "vue"
  import cityData from "../cityData.json"

  const props = defineProps(["tabData", "cityName"])
  const cityName = props.cityName


  let tabs = []
  if (cityData.cities[cityName]) { 
    const tabData = cityData.cities[cityName].tabs
    tabs = reactive(
      tabData.map(({ tabTitle, tabHeader, tabText }, index) => ({
        tabTitle,
        tabHeader,
        tabText,
        isActive: index === 0
      }))
    )
  }

  var selectedIndex = 0
  function setSelectedIndex(index) {
    selectedIndex = index
  }

  function handleTab(selectedIndex) {
    setSelectedIndex(selectedIndex)
    tabs.forEach((_, index) => {
      tabs[index].isActive = index === selectedIndex ? true : false
    })
  }
</script>
  
<style>
  .tabs__container {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }

  .tab-bar {
    width: 100%;
    background-color: hsl(210, 50%, 15%);

    border-radius: var(--space-3) var(--space-3) 0 0;

    display: flex;
    justify-content: flex-start;
    align-items: end;
  }

  .tab {
    margin-left: var(--space-3);
    margin-top: var(--space-3);

    border-radius: var(--space-3) var(--space-3) 0 0;

    border-style: solid;
    border-width: var(--space-6) var(--space-6) 0 var(--space-6);
    border-color: hsl(210, 50%, 20%);
    background-color: rgba(0, 0, 0, 0);

    display : flex
  }

  .tab.active {
    background-color: hsl(210, 50%, 20%);
  }

  .tab-title {
    margin: var(--space-4);
    margin-bottom: var(--space-5);
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
  }

  .tab.active .tab-title > * {
    color: hsl(210, 50%, 80%);
  }
  .tab-title:hover > * {
    color: hsl(210, 50%, 80%);
  }

  .tab-pages {
    width: 100%;
  }

  .tab-pages > * {
    display: none;
    width: 100%;
  }

  .tab-pages > *.active {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
  }
  
</style>