<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  message: "",
});

const submitted = ref(false);

function handleSubmit() {
  console.log("Formulaire soumis :", form.value);
  submitted.value = true;
}
</script>

<template>
  <div class="contact-view">
    <h1>Contactez-moi</h1>
    <p>
      Si vous voulez me contacter pour toute demande de travail, merci de
      remplir les cases en dessous et je reviendrai vers vous !
    </p>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Nom:</label>
        <input id="name" v-model="form.name" type="text" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="form.email" type="email" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>
      <button type="submit">Envoyer</button>
    </form>
    <p v-if="submitted">
      Merci pour votre message, nous vous contacterons bientôt!
    </p>
  </div>
</template>

<style scoped>
.contact-view {
  max-width: 420px;
  margin: 40px auto 0 auto;
  background: #fff;
  border-radius: 16px;
  box-shadow:
    0 4px 32px rgba(0, 188, 212, 0.07),
    0 1.5px 4px #6c757d22;
  padding: 2em 2.4em 2.4em 2.4em;
  font-family:
    "Segoe UI", "Helvetica Neue", Arial, "Liberation Sans", sans-serif;
}

.contact-view h1 {
  color: #00bcd4;
  text-align: center;
  margin-bottom: 0.35em;
  letter-spacing: 1px;
}

.contact-view p {
  color: #6c757d;
  font-size: 1.06em;
  text-align: center;
  margin-bottom: 1.8em;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.3em;
}

.form-group label {
  color: #6c757d;
  margin-bottom: 0.5em;
  font-weight: 600;
  letter-spacing: 0.4px;
}

.form-group input,
.form-group textarea {
  background: #f4fcfd;
  border: 1.5px solid #00bcd422;
  border-radius: 10px;
  padding: 0.9em 1em;
  font-size: 1em;
  color: #222;
  box-shadow: 0 1px 5px #00bcd41a;
  transition: border 0.25s;
  outline: none;
  resize: none;
}

.form-group input:focus,
.form-group textarea:focus {
  border: 1.7px solid #00bcd4;
  background: #e6fafd;
}

button[type="submit"] {
  display: block;
  margin: 1.4em auto 0 auto;
  background: #00bcd4;
  color: #fff;
  font-weight: 700;
  padding: 0.9em 2.3em;
  border: none;
  border-radius: 10px;
  font-size: 1.12em;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px #00bcd42a;
  cursor: pointer;
  transition: background 0.22s;
}

button[type="submit"]:hover,
button[type="submit"]:focus {
  background: #0097a7;
}

p[v-cloak],
.contact-view p:last-child {
  color: #00bcd4;
  text-align: center;
  font-weight: bold;
  margin-top: 1.7em;
  font-size: 1.15em;
}

@media (max-width: 500px) {
  .contact-view {
    padding: 1.3em 0.7em;
    max-width: 99vw;
  }
}
</style>
