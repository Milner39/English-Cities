<template>
  <div class="tab-bar">
    <div v-for="(tab, index) in tabs" :key="tab.title" class="tab">
      <button
        :class="[
          'tab-title',
          {
            active: tab.isActive,
          },
        ]"
          @click="handleTab(index)"
      >
        {{ tab.title }}
      </button>
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
    height: 40px;
    background-color: hsl(210, 50%, 15%);

    display: flex;
    justify-content: flex-start;
    align-items: end;
  }

  .tab {
    min-width: 80px;
    width: 10%;
    margin: 0 5px;
    height: 80%;
  }

  .tab-title {
    width: 100%;
    height: 100%;

    border-radius: 20px 20px 0 0;
    border-style: solid;
    border-width: 2px 2px 0 2px;
    border-color: hsl(210, 50%, 20%);

    color: white;
    background-color: rgba(0, 0, 0, 0);
  }

  .tab-title:hover {
    color: hsl(210, 50%, 80%);
  }
  .tab-title.active {
    color: hsl(210, 50%, 80%);
    background-color: hsl(210, 50%, 20%);
  }

  .tab__page {
    margin: 0 auto
  }

  .tab__page > * {
    display: none;
    width: 100%;
    color: white
  }

  .tab__page > *.active {
    display: block;
  }
  
</style>