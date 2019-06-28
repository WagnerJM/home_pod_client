<template>
  <div class="container">
    <form>
      <h2>Login</h2>
      <label>Username</label>
      <input type="text" name="Username" placeholder="Username...">
      <label>Password</label>
      <input type="password" name="Password" placeholder="Password...">
      <button>Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    username: "",
    password: ""
  }),
  methods: {}
};
</script>

<style>
</style>
