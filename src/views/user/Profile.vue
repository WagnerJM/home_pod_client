<template>
  <div class="container">
    <FlashMessage></FlashMessage>
    <h1>
      User Profile
      <i class="material-icons clickable" @click="editItem(userData)">edit</i>
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
          <button @click="saveUser">Speichern</button>
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
import http from "../../axios-instance";

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
    editItem(userData) {
      this.$modal.show("profile");
      this.editedItem = Object.assign({}, userData);
    },
    saveUser() {
      const formData = {
        username: this.editedItem.username,
        email: this.editedItem.email,
        ort: this.editedItem.ort
      };
      http
        .put("/user", formData)
        .then(res => {
          this.$store.commit("setUser", res.data);
          this.flashMessage.success({
            message: "User Profil wurde aktualisiert."
          });
        })
        .catch(error => {
          this.flashMessage.error({ title: "ERROR", message: error });
        });
    }
  }
};
</script>

<style>
</style>
