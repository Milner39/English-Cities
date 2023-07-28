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
        <h4>{{ tab.title }}</h4>
      </div>
    </div>
  </div>
  <div class="tab__page">
    <div v-for="(tab, index) in tabs" :key="tab.title" :class="[{ active: selectedIndex === index }]">
      <h1>{{ tab.header }}</h1>
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

    border-radius: 16px 16px 0 0;

    display: flex;
    justify-content: flex-start;
    align-items: end;
  }

  .tab {
    width: 10%;
    min-width: 64px;
    height: 32px;

    margin-left: 16px;
    margin-top: 16px;

    border-radius: 16px 16px 0 0;

    border-style: solid;
    border-width: 2px 2px 0 2px;
    border-color: hsl(210, 50%, 20%);
    background-color: rgba(0, 0, 0, 0)
  }

  .tab.active {
    background-color: hsl(210, 50%, 20%);
  }

  .tab-title {
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center;
  }

  .tab.active .tab-title {
    color: hsl(210, 50%, 80%);
  }
  .tab-title:hover {
    color: hsl(210, 50%, 80%);
  }

  .tab__page {
    width: 100%;

    padding-top: 16px;
  }

  .tab__page > * {
    display: none;
    width: 100%;
  }

  .tab__page > *.active {
    display: block;
  }
  
</style>