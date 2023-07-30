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
      <h3 class="heading">Inputs marked with <span class="red">*</span> are required</h3>
      <form class="form">
        <FormInput :input='{
          id: "fName",
          type: "text",
          label: "First Name:",
          placeholder: "First Name...",
          pattern: null,
          required: false
        }'/>
        <FormInput :input='{
          id: "lName",
          type: "text",
          label: "Last Name:",
          placeholder: "Last Name...",
          pattern: null,
          required: false
        }'/>
        <FormInput :input='{
          id: "email",
          type: "email",
          label: "Email:",
          placeholder: "Example.email@example.com...",
          pattern: null,
          required: true
        }'/>
        <FormInput :input='{
          id: "message",
          type: "text",
          label: "Message:",
          placeholder: "Message...",
          pattern: null,
          required: true
        }'/>
      </form>
      <button  class="button" @click="handleSubmit()"><h6>SUBMIT</h6></button>
    </div>

    <div class="success-page">
      <h1>Form Submited, Thank You!</h1>
    </div>

  </div>
</template>
  
<script setup>
  import FormInput from '../components/FormInput.vue';
  import close from '../../public/svgs/close.vue';

  const requiredIndex = [2,3]
  const handleSubmit = () => {
    const inputs = document.getElementsByClassName("input")
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
    background-color: hsl(210, 50%, 20%);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .contact-form {
    margin: var(--space-2);
    padding: var(--space-2);

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: var(--space-2);

    border-style: solid;
    border-radius: var(--space-3);
    border-width: var(--space-6);
    border-color: hsl(210, 0%, 50%);
  }

  .heading {
    text-align: center;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: var(--space-3);
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

  .error-msg {
    margin: var(--space-1);
    text-align: center;
  }

  .close-button {
    padding: 8px;

    aspect-ratio: 1/1;

    border-radius: 100%;
    border: none;
    background-color: hsl(210, 50%, 20%);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close-button > svg {
    width: var(--space-3);
    height: var(--space-3);

    fill: white;
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



  .success-page {
    display: none;
    place-content: center;
    padding: var(--space-1);
    text-align: center;
  }




  @media (max-width: 1024px) {
    .input {
      --font-size: 16px
    }
  }
</style>
  