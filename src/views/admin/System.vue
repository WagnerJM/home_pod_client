<template>
  <div class="container">
    <h1>System Test</h1>
    <button @click="editItem(systemSettings)" >Edit</button>
    
    <div class="flex-container">
      <h2>E-Mail Einstellungen</h2>
      <div v-if="!this.edit">
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
          TLS: <b>{{systemSettings.email_tls }}</b> 
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
        <modal name="test">
          <h2>Edit</h2>
         <div class="flex-container">
           <label >System Email</label>
           <input type="text" v-model="editedItem.system_email">
           <label>Email Password:</label>
           <input type="text" v-model="editedItem.email_password">
           <button @click="save">Save</button>
         </div>
        </modal>
      </div>
        
      <div v-else>
        <p>
          System Email: <input type="text" >
        </p>
        <p>
          Email Password:<input type="text">  
        </p>
        <p>
          SMTP Host: <input type="text" v-model="systemSettings.smtp_host">
        </p>
        <p>
          SMTP PORT: <input type="text" v-model="systemSettings.smtp_port">
        </p>
        <p>
          TLS: <input type="text" v-model="systemSettings.email_tls">
        </p>
        <hr>
        <h2> Recorder Einstellungen: </h2>
        <p>
          framesize: <input type="text" v-model="systemSettings.framesize">
        </p>
        <p>
          Driver Path: <input type="text" v-model="systemSettings.driver_path">
        </p>
        <p>
          Profile Path: <input type="text" v-model="systemSettings.profile_path">
        </p>
      </div>
    </div>

  </div>
</template>

<script>


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
      this.$modal.show("test");
      this.editedItem = Object.assign({}, settings)
      
    },
    save() {
      const formData = {
          system_email: this.editedItem.system_email,
          email_password: this.editedItem.email_password
      }
      console.log(formData);
    }
  },
};
</script>

<style>
</style>
