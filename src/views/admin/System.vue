<template>
  <div class="container">
    <h1>System Test</h1>
    <button >Edit</button>
    <div class="flex-container">
      <h2>E-Mail Einstellungen</h2>
      <p>
        System Email: <b>{{systemSettings.system_email }}</b>
      </p>
      <p>
        Email Password: <b>{{systemSettings.email_password }}</b>
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
    </div>

  </div>
</template>

<script>
import Modal from '@/components/Modal.vue'

export default {
  components: {
    Modal
  },
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
      showModal: false,
      settings: {
        email: {
          system_email: "",
          email_password: "",
          smtp_host: "",
          smtp_port: "",
          email_tls:""
        },
        recorder: {
          framesize: 0,
          driver_path: "",
          profile_path: ""
        }
      },
      
      default_settings: {
        email: {
          system_email: "",
          email_password: "",
          smtp_host: "",
          smtp_port: "",
          email_tls:""
        },
        recorder: {
          framesize: 0,
          driver_path: "",
          profile_path: ""
        }
      }

    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  },
};
</script>

<style>
</style>
