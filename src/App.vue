<template>
  <div id="app">
    <div class="topnav">
      <a class="active">Home Pod</a>

      <router-link class="right active" to="/login" v-if="!this.$store.state.isAuthenticated">Login</router-link>
      <router-link class="right" to="/signup" v-if="!this.$store.state.isAuthenticated">Sign Up</router-link>

      <router-link
        class="active right"
        to="/profile"
        v-if="this.$store.state.isAuthenticated"
      >Profile</router-link>
      <router-link class="right" to="/recorder" v-if="this.$store.state.isAuthenticated">Recorder</router-link>
    </div>

    <router-view></router-view>
    <div class="footer">
      <div>&copy {{ new Date().getFullYear() }} J-M. Wagner</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
