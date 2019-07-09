<template>
  <div class="container">
    <h1>Home Screen</h1>
    <div class="flex-container row wrap">
      <div class="card clickable" @click="navigate('/recorder')">
        <div class="card-container">
          <h2>Recorder</h2>
        </div>
      </div>
      <div class="card clickable">
        <div class="card-container">
          <h2>Finanzen</h2>
        </div>
      </div>
      <div
        class="card clickable"
        v-if="this.$store.state.user.is_admin"
        @click="navigate('/admin/system')"
      >
        <div class="card-container">
          <h2>System Settings</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigate(route) {
      this.$router.push(route);
    }
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
