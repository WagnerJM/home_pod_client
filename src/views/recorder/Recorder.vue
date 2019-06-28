<template>
  <div class="container">
    <h1>Recorder</h1>
    <div class="flex-container">
      <label>Search Track...</label>
      <input type="text" placeholder="Track..." style="width: 50%;">

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
              <div class="list-group-item" v-for="(element, i) in tracks" :key="i">{{element.name}}</div>
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
              >{{element.name}}</div>
              <div slot="header" class="list-group-item" role="group" aria-label>
                <button class="btn btn-secondary">Aufnehmen</button>
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
export default {
  name: "two-lists",
  display: "Two Lists",
  order: 1,
  components: {
    draggable
  },
  data() {
    return {
      tracks: [{ name: "John", id: 1 }],
      recordList: []
    };
  }
};
</script>

<style>
</style>
