<template>
  <div class="page-darken" @click="closeModal()"></div>
  <div class="modal">
    <div class="close__container">
      <button class="close" @click="closeModal()">X</button>
    </div>
    <h1 class="error-msg">
      Form Not Valid, Try Again
    </h1>
  </div>
  <div class="contact-page">
    <div class="contact-form">
      <h2 class="heading">Inputs marked with <span class="red">*</span> are required</h2>
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
        <input type="text" id="email" name="email" class="input"
          placeholder="example@email.com..."
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
        >
        <br><br>

        <label for="message" class="input-title">Message:<span class="red">*</span></label>
        <br>
        <input type="text" id="message" name="message" class="input"
          placeholder="Message..."
          pattern=".{1,}"
        >
      </form>
      <button  class="submit" @click="handleSubmit()">SUBMIT</button>
    </div>
    <div class="success-page">
      <h1>Form Submited, Thank You!</h1>
    </div>
  </div>
</template>
  
<script setup>
  import { onMounted } from 'vue';

  const handleSubmit = () => {
    console.log("Clicked")
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
    successPage[0].style.display = "grid"
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
    height: 80vh;
    background-color: hsl(210, 50%, 20%);

    display: flex;
    justify-content: center;
    align-items: center;
  }
  .contact-form {
    width: 600px;
    display: grid;
    place-content: center;

    border-style: solid;
    border-radius: 16px;
    border-width: 2px;
    border-color: hsl(210, 0%, 50%)
  }

  .contact-form > * {
    margin-bottom: 16px;
  }

  .contact-form > *:first-child {
    margin-top: 16px;
  }

  .form {
    display: block;
  }

  .input-title {
    margin-left: 16px;
  }
  
  .input {
    width: calc(100% - 16px);
    height: 32px;

    padding: 0;
    margin: 0;
    padding-left: 16px;

    border-style: solid;
    border-radius: 16px;
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

  .submit {
    width: 90%;
    height: 50px;
    border: none;
    border-radius: 100px;
    margin: 0 auto;

    background-color: hsl(210, 50%, 25%);
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: transform 50ms ease-in-out;
  }

  .submit:hover {
    transform: scale(1.05);
  }

  .submit:active {
    transform: scale(1);
  }

  .modal {
    width: 60%;
    max-width: 600px;
    aspect-ratio: 2/1;
    background-color: hsl(210, 50%, 25%);

    display: none;
    justify-content: center;
    align-items: center;

    position: fixed;
    z-index: 10000000000000;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 20px;
  }

  .close__container {
    position: absolute;
    top: 0;
    right: 0;

    width: 8%;
    aspect-ratio: 1/1;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close {
    width: 75%;
    aspect-ratio: 1/1;
    padding: 0;
    border-radius: 100%;
    border: none;
    background-color: hsl(210, 50%, 20%);
    font-size: 20px;
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
    width: 80%;
    text-align: center;
  }

  .success-page {
    height: 100%;
    display: none;
    place-content: center;
  }
</style>
  