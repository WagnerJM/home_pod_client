<template>
  <div class="container">
    <FlashMessage> </FlashMessage>
    <h1>Recorder</h1>
    <h2>
      1. Folge dem Link und erstelle ein Token
    <a target="_blank" rel="noopener noreferrer"  
    href="https://developer.spotify.com/console/get-search-item/?q=Hysteria%2CMuse&type=track%2Cartist&market=DE&limit=&offset=">
    Link
    </a>


    </h2>
    <label >Token...</label>
    <input type="text" placeholder="BQBFknQ6shB9J..." v-model="spotify_token">
    <button @click="saveToken">Save Token</button>
    <br><br><br>
    <h2>2. Suche nach dem Titel</h2>
    <div class="flex-container" >
      <label>Track Name...</label>
      <input type="text" placeholder="Track..." style="width: 50%;" v-model="trackName">
      <button style="width: 50%;" @click="getTracks">Search</button>

      <h2>3. Ziehe die gewünschten Lieder nach rechts in die Liste</h2>
      <div class="flex-container row">
        <div class="card">
          <div class="card-container">
            <h2>Search Results</h2>
            <draggable
              :list="tracks"
              class="list-group"
              :group="{ name: 'music', pull: 'clone', put: false }"
              style="height: 100%;"
            >
              <div class="list-group-item" v-for="(element, i) in tracks" :key="i">
                <h3>
                {{element.name}}

                </h3>
                <p>Album: {{element.album.name}}</p>
                <p v-for="(artist, i) in element.album.artists" :key="i">Artist: {{artist.name}}</p>

              </div>
            </draggable>
          </div>
        </div>
        <div class="card">
          <div class="card-container">
            <h2>Record List</h2>

            <draggable :list="recordList" class="list-group" style="height: 100%;" group="music">
              <div
                class="list-group-item"
                v-for="(element, i) in recordList"
                :key="i"
                >
               <h3>
                {{element.name}}
               </h3>
                <p>Album: {{element.album.name}}</p>
                <p v-for="(artist, i) in element.album.artists" :key="i">Artist: {{artist.name}}</p>

              
              </div>
              <div slot="header" class="list-group-item" role="group" aria-label>
                <button @click="recordTracks" class="btn btn-secondary">Aufnehmen</button>
              </div>
            </draggable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import http from '../../axios-instance';
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      spotify_token: "",
      trackName: "",
      tracks: [],
      recordList: []
    };
  },
  methods: {
    saveToken() {
      const formData = {
        spotify_token: this.spotify_token
      }
      http
        .post("/saveToken", formData)
        .then(res => {
          //this.flashMessage.success({ title: "Token Speichern", message: res.data.message });
          console.log(res.data)
          this.spotify_token = "";
        })
        .catch(error => {
          this.flashMessage.error({ title: "ERROR", message: error })
        })
    },
    getTracks() {
      const formData = {
        trackName: this.trackName
      }
      http
      .post("/search", formData)
      .then(res => {
        console.log(res.data)

        this.tracks = Object.assign([], res.data.tracks.items);
        this.flashMessage.success( {message: "Lieder gefunden"})
      })
      .catch(error => {
        this.flashMessage.error({message: error})
      });
    },
    recordTracks() {
      const formData = {
        recordList: this.recordList
      }
      http
        .post("record", formData)
        .then(res => {
          console.log(res.data)
          this.flashMessage.success({message: "Lieder werden aufgenommen."})
          this.tracks = Object.assign([], []);
          this.recordList = Object.assign([], []);
        })
        .catch(error => {
          this.flashMessage.error({message: error})
        })
    }
  },
};
</script>

<style>
</style>
