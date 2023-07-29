<template>
  <div class="tab-bar">
    <div v-for="(tab, index) in tabs" :key="tab.title" :class="[
      'tab',
      {
        active: tab.isActive
      }
    ]"
    >
      <div class="tab-title" @click="handleTab(index)">
        <h6>{{ tab.title }}</h6>
      </div>
    </div>
  </div>
  <div class="tab__page">
    <div v-for="(tab, index) in tabs" :key="tab.title" :class="[{ active: selectedIndex === index }]">
      <h3>{{ tab.header }}</h3>
      <p>
        {{ tab.text }}
      </p>
    </div>
  </div>
</template>
   
<script setup>

  import { reactive } from "vue"

  const props = defineProps(["tabData"])
  const tabData = props.tabData

  const tabs = reactive(
    tabData.map(({ title, header, text }, index) => ({
      title,
      header,
      text,
      isActive: index === 0
    }))
  )

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

  .tab__page {
    width: 100%;

    margin-top: var(--space-3);
  }

  .tab__page > * {
    display: none;
    width: 100%;
  }

  .tab__page > *.active {
    display: block;
  }

  .tab__page > * > *:not(:first-child) {
    padding-top: var(--space-4);
  }
  
</style>