<template>
  <div class="container">
    <form @submit.prevent>
      <h2>Registrieren</h2>
      <label>Username</label>
      <input type="text" name="username" placeholder="Username..." v-model="username">
      <label>E-mail</label>
      <input type="text" name="email" placeholder="Email..." v-model="email">
      <label>Password</label>
      <input type="password" name="password" placeholder="Password..." v-model="password">
      <button @click="register">Registrieren</button>
    </form>
  </div>
</template>

<script>
import http from '../../axios-instance';

export default {
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    register() {
      const formData = {
        username: this.username,
        password: this.password,
        email: this.email
      }
    http.post("/register", {
      username: formData.username,
      password: formData.password,
      email: formData.email
    })
    .then( res => {
      console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    });
    
    }
  },
};
</script>

<style>
</style>
