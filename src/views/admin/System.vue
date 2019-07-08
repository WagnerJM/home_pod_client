<template>
  <div class="container">
    <h1>System Test</h1>
    <button @click="editItem(systemSettings)" >Edit</button>
    <FlashMessage></FlashMessage>
    <div class="flex-container">
      <h2>E-Mail Einstellungen</h2>
      <div>
        <p>
          System Email: <b>{{systemSettings.system_email }} </b> 
        </p>
        <p>
          Email Password: <b>{{systemSettings.email_password }} </b> 
        </p>
        <p>
          SMTP Host: <b>{{systemSettings.smtp_host }}</b> 
        </p>
        <p>
          SMTP PORT: <b>{{systemSettings.smtp_port }}</b> 
        </p>
        <p>
          TLS: <input v-if="systemSettings.email_tls" type="checkbox" checked >           <input type="checkbox" v-else>

        </p>
        <hr>
        <h2> Recorder Einstellungen: </h2>
        <p>
          framesize: <b>{{systemSettings.framesize }}</b> 
        </p>
        <p>
          Driver Path: <b>{{systemSettings.driver_path }}</b> 
        </p>
        <p>
          Profile Path: <b>{{systemSettings.profile_path }}</b> 
        </p>
        <modal name="settings" height="auto" :adaptive="true">
          <h2>Edit</h2>
         <div class="flex-container">
           <h2>E-Mail Einstellungen</h2>
           <label >System Email</label>
           <input type="text" v-model="editedItem.system_email">
           <label>Email Password:</label>
           <input type="text" v-model="editedItem.email_password">
           <label>SMTP Host</label>
           <input type="text" v-model="editedItem.smtp_host">
           <label>SMTP Port</label>
           <input type="text" v-model="editedItem.smtp_port">
           <p>TLS:
             <input type="checkbox" v-model="editedItem.email_tls">
           </p>
           <hr>
           <h2>Recorder</h2>
           <label>framesize</label>
           <input type="text" v-model="editedItem.framesize">
           <label>Driver Path</label>
           <input type="text" v-model="editedItem.driver_path">
           <label>Profile Path</label>
           <input type="text" v-model="editedItem.profile_path">

           <button @click="save">Save</button>
         </div>
        </modal>
      </div>
        
      
    </div>

  </div>
</template>

<script>
import http from "../../axios-instance";

export default {

  created() {
    this.$store.dispatch("GET_SYSTEM_SETTINGS");
  },
  computed: {
    systemSettings() {
      return this.$store.getters["system_settings"];
    }
  },
  name: "system",
  data() {
    return {
      edit: false,
      editedItem: {
       
          system_email: "",
          email_password: "",
          smtp_host: "",
          smtp_port: "",
          email_tls:"",
          framesize: 0,
          driver_path: "",
          profile_path: ""
        
      },
      
      default_settings: {
        system_email: "",
          email_password: "",
          smtp_host: "",
          smtp_port: "",
          email_tls:"",
           framesize: 0,
          driver_path: "",
          profile_path: ""
      }

    }
  },
  methods: {
    editItem(settings) {
      this.$modal.show("settings");
      this.editedItem = Object.assign({}, settings)
      
    },
    save() {
      const formData = {
          system_email: this.editedItem.system_email,
          email_password: this.editedItem.email_password,
          smtp_host: this.editedItem.smtp_host,
          smtp_port: this.editedItem.smtp_port,
          email_tls: this.editedItem.email_tls,
          framesize: this.editedItem.framesize,
          driver_path: this.editedItem.driver_path,
          profile_path: this.editedItem.profile_path,
      }
      http
        .put("/system/setting", formData)
        .then(res => {
          this.$store.commit("setSettings", res.data);
          this.flashMessage.success({ title: "Speichern", message: "Einstellungen wurden erfolgreich gespeichert" });
        })
        .catch(error => {
          this.flashMessage.error({ titel: "Error", message: error })
        })
        this.$modal.hide("settings");
      
    }
  },
};
</script>

<style>
</style>
