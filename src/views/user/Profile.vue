<template>
  <div class="container">
    <FlashMessage></FlashMessage>
    <h1>
      User Profile
      <i class="material-icons clickable" @click="editItem()">edit</i>
    </h1>
    <modal name="profile" height="auto" :adaptive="true">
      <div class="flex-container">
        <div style="padding: 5%;">
          <h2>Profile</h2>
          <label>Username:</label>
          <input type="text" name="username">
          <label>E-Mail:</label>
          <input type="email" name="email">
          <label>Ort:</label>
          <input type="text" name="ort">
          <button>Speichern</button>
        </div>
      </div>
    </modal>
    <div class="flex-container">
      <p>
        Username:
        <b></b>
      </p>
      <p>
        Email:
        <b></b>
      </p>
      <p>
        Ort:
        <b></b>
      </p>
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
      editedItem: {
        username: "",
        email: "",
        ort: ""
      }
    };
  },
  methods: {
    editItem(settings) {
      this.$modal.show("profile");
      this.editedItem = Object.assign({}, settings);
    }
  }
};
</script>

<style>
</style>
