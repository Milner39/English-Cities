<template>
  <div>
  <label :for="inputData.id" class="input-title">
    <h5>
      {{ inputData.label }}
      <span v-if="inputData.required" class="red">*</span>
    </h5>
  </label>
  <input :type="inputData.type" :id="inputData.id" :name="inputData.id" class="input"
    :placeholder="inputData.placeholder"
    :pattern="inputData.pattern"
  >
  </div>
</template>

<script setup>
  const props = defineProps(["input"])
  const inputData = props.input
</script>

<style>
  .input-title {
    display: block;
    margin-left: var(--space-3);
  }
  
  .input {
    --padding: var(--space-3);
    --border-width: var(--space-6);
    width: calc(100% - var(--padding) - (var(--border-width) * 2));

    margin: 0;
    padding: var(--padding) 0 var(--padding) var(--padding) ;
    outline: none;

    --font-size: 20px;
    font-size: var(--font-size);

    border-style: solid;
    border-width: var(--border-width);
    border-radius: var(--space-3);
    border-color: hsl(210, 0%, 50%);
    background-color: hsla(210, 50%, 20%, 20%);
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover, 
  input:-webkit-autofill:focus, 
  input:-webkit-autofill:active{
    -webkit-background-clip: text;
    -webkit-text-fill-color: #ffffff;
  }

  input:placeholder-shown {
    border-color: hsl(210, 0%, 50%) !important;
  }

  input:invalid {
    border-color: hsl(0, 69%, 50%);
  }
  input:valid {
    border-color: hsl(120, 69%, 50%);
  }

  .red {
    color: hsl(0, 69%, 50%);
  }
</style>