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
    <div :class="[{ active: selectedIndex === 0 }]">
      <h1>ABOUT</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar felis ac lorem malesuada volutpat. Nullam eu facilisis augue. Nam et mi massa. Integer interdum, diam et tempor porta, felis tellus lacinia purus, et scelerisque dolor purus sit amet risus. Proin fringilla in odio eget dictum. Proin ultrices lacus velit. Fusce risus mi, varius cursus gravida at, elementum non lacus. Curabitur sit amet purus quam. Nullam quis enim ac purus molestie rhoncus.
      </p>
    </div>
    <div :class="[{ active: selectedIndex === 1 }]">
      <h1>
        LANDMARKS
      </h1>
      <p>
        Phasellus tincidunt nibh eu egestas vestibulum. Praesent sit amet lobortis augue. Morbi ac vestibulum justo. Duis tempus lacus sed mi suscipit, quis pharetra sem porta. Fusce hendrerit sem mauris, nec euismod enim cursus in. Maecenas feugiat, felis vel vestibulum fringilla, est nulla malesuada lectus, eu volutpat tellus dui at massa. Aliquam in urna ac dolor aliquet pulvinar. Sed cursus ligula ac aliquam blandit. Fusce sollicitudin hendrerit fermentum. Vestibulum odio lectus, sodales nec gravida sed, iaculis et purus. Maecenas pulvinar libero lacus, sed viverra dolor volutpat ac. Integer mollis sollicitudin eros, nec iaculis erat sodales sit amet. Nam id tincidunt nisl, quis consectetur nibh. Etiam id quam lorem. Nulla nec ultrices nibh. Ut sed arcu vitae mi molestie luctus.
      </p>
    </div>
    <div :class="[{ active: selectedIndex === 2 }]">
      <h1>
        TRAVEL
      </h1>
      <p>
        Phasellus luctus sed ex gravida accumsan. In vitae blandit mi. Proin at porta purus. Nam vehicula, nibh nec rhoncus fermentum, est est ultrices libero, ut posuere nunc magna id eros. Phasellus nec rutrum ligula. Cras condimentum lacus vel augue rutrum, consequat tristique ipsum condimentum. Aenean a nisi sit amet eros congue aliquet sed at libero.
      </p>
    </div>
  </div>
</template>
  
<script setup>

  import { reactive } from "vue"

  const fakeData = [
    {
      title: "About"
    },
    {
      title: "Landmarks"
    },
    {
      title: "Travel"
    }
  ]

  const tabs = reactive(
    fakeData.map(({ title, link }, index) => ({
      title,
      link,
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
    width: 95%;
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