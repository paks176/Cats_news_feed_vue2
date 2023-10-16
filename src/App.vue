<template>
  <div id="app">
    <addPostForm></addPostForm>
    <div v-for="cat in getAllCats" :key="cat.id" :id="cat.id" class="cat-post">
        <img style="width:auto; max-height:300px" :src="cat.url" :alt="cat.id">
    </div>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex';
import addPostForm from './components/addPostForm.vue'
export default {
  name: 'App',
  components: {
    addPostForm,
  },
  methods: mapActions(['fetchCats']),
  computed: mapGetters(['getAllCats']),
  
  mounted() {
    this.fetchCats();
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.cat-post {
  border: 1px solid gray;
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 10px;
}
img {
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
