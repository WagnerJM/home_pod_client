<template>
  <div class="container">
    <h1>User Profile</h1>
    <div class="flex-container">
      <p>Username: {{}}</p>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    userData() {
      return this.$store.getters["userData"];
    }
  },
  data() {
    return {
      username: ""
    };
  }
};
</script>

<style>
</style>
