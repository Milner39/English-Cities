<template>
  <div class="page-darken" @click="closeModal()"></div>
  <div class="modal">
    <div class="close__container">
      <button class="close-button" @click="closeModal()"><close/></button>
    </div>
    <h1 class="error-msg">
      Form Not Valid, Try Again
    </h1>
  </div>
  <div class="contact-page">
    <div class="contact-form">
      <h4 class="heading">Inputs marked with <span class="red">*</span> are required</h4>
      <form class="form">
        <label for="fname" class="input-title">First Name:</label>
        <br>
        <input type="text" id="fname" name="fname" class="input"
          placeholder="First Name..."
        >
        <br><br>

        <label for="lname" class="input-title">Last name:</label>
        <br>
        <input type="text" id="lname" name="lname" class="input"
          placeholder="Last Name..."
        >
        <br><br>

        <label for="email" class="input-title">Email:<span class="red">*</span></label>
        <br>
        <input type="email" id="email" name="email" class="input"
          placeholder="example@email.com..."
          >
        <br><br>

        <label for="message" class="input-title">Message:<span class="red">*</span></label>
        <br>
        <input type="text" id="message" name="message" class="input"
          placeholder="Message..."
          pattern=".{1,}"
        >
      </form>
      <button  class="button" @click="handleSubmit()"><h5>SUBMIT</h5></button>
    </div>
    <div class="success-page">
      <h1>Form Submited, Thank You!</h1>
    </div>
  </div>
</template>
  
<script setup>
  import close from '../../public/svgs/close.vue';

  const handleSubmit = () => {
    const inputs = document.getElementsByClassName("input")
    const requiredIndex = [2,3]
    for (let index = 0; index < inputs.length; index++) {
      if (!inputs[index].checkValidity() || (inputs[index].value == "" && requiredIndex.includes(index))) {

        const modal = document.getElementsByClassName("modal")
        modal[0].style.display = "flex"

        const darken = document.getElementsByClassName("page-darken")
        darken[0].style.display = "block"

        return
      }
    }
    const contactForm = document.getElementsByClassName("contact-form")
    contactForm[0].style.display = "none"

    const successPage = document.getElementsByClassName("success-page")
    successPage[0].style.display = "flex"
  }

  const closeModal = () => {
    const modal = document.getElementsByClassName("modal")
    modal[0].style.display = "none"

    const darken = document.getElementsByClassName("page-darken")
    darken[0].style.display = "none"
  }
  
 
</script>
  
<style>
  .contact-page {
    width: 100%;
    background-color: hsl(210, 50%, 20%);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact-form {
    display: grid;
    place-content: center;

    border-style: solid;
    border-radius: var(--space-3);
    border-width: var(--space-6);
    border-color: hsl(210, 0%, 50%);

    margin: var(--space-2);
    padding: var(--space-3);
  }

  .contact-form > *:not(:first-child) {
    margin-top: var(--space-3);
  }

  .form {
    display: block;
  }

  .input-title {
    margin-left: var(--space-3);
  }
  
  .input {
    --padding: var(--space-3);
    --border-width: var(--space-6);
    width: calc(100% - var(--padding) - (var(--border-width) * 2));
    height: var(--space-2);

    padding: 0;
    margin: 0;
    padding-left: var(--padding);

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

  .button {
    width: 100%;
    padding: var(--space-3) 0;
    border: none;
    border-radius: var(--space-3);

    background-color: hsl(210, 50%, 25%);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 50ms ease-in-out;

    box-shadow: 0 4px 8px 0 rgba(0,0,0,.1);
  }

  .button:hover {
    transform: scale(1.05);
  }

  .button:active {
    transform: scale(1);
  }

  .modal {
    width: calc(100% - var(--space-1));
    max-width: 800px;
    min-height: 30vh;
    background-color: hsl(210, 50%, 25%);

    display: none;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 10000000000000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: var(--space-2);

    animation-name: slide-down;
    animation-duration: 1s;
  }

  @keyframes slide-down {
    from {top: -50%;}
    to {top: 50%;}
  }

  .close__container {
    position: absolute;
    top: 0;
    right: 0;

    margin: var(--space-3);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close-button {
    padding: 8px;

    aspect-ratio: 1/1;

    border-radius: 100%;
    border: none;
    background-color: hsl(210, 50%, 20%);
    font-size: 20px;

    display: flex;
  }

  .close-button > svg {
    width: var(--space-3);
    height: var(--space-3);
  }

  .page-darken {
    width: 100%;
    height: 100%;
    background-color: hsla(0, 0%, 0%, 0.5);

    display: none;

    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
  }

  .error-msg {
    margin: var(--space-1);
    text-align: center;
  }

  .success-page {
    display: none;
    place-content: center;
    padding: var(--space-1);
  }
</style>
  