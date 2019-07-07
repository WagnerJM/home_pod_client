<template>
  <div class="loader" v-if="this.$store.state.loading">

  </div>
  <div class="container" v-else>
    <form @submit.prevent>
      <h2>Login</h2>
      <label>Username</label>
      <input type="text" name="Username" placeholder="Username..." v-model="username">
      <label>Password</label>
      <input type="password" name="Password" placeholder="Password..." v-model="password">
      <button @click="login()">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {
    login() {
      const formData = {
        username: this.username, 
        password: this.password
      }
      this.$store.dispatch('LOGIN', formData)
    }
  }
};
</script>

<style>
</style>
