<template>
  <form action="">
    <input v-model="description" type="text" placeholder="Description">
      <img :src="getCatImage" :alt="getCatImage">
      <button @click="fetchFormCat(fetchData)">Next</button>
      <button @click="sendPost({fetchData, description})">Send</button>
  </form>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
  name: "addPostForm",
  data() {
    return {
      description: '',
      
      fetchData: {
        imgElement: '',
        path: require('./../images/load.gif'), 
      },
    }
  },
  computed: {
    ...mapGetters(['getCatImage']),
  },
  methods: {
    ...mapActions(['fetchFormCat', 'sendPost']),
    getImgElement() {
      return document.querySelector('img')
    },
  },
  mounted() {
    this.fetchData.imgElement = this.getImgElement();
  }
}
</script>

<style scoped>
form {
  text-align: start;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 30px;
}
img {
  display: block;
  max-width: 300px;
  height: auto;
  min-height: 100px;
  overflow: hidden;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 20px;
}
input {
  padding: 5px;
  width: 300px;
  border: 1px solid cadetblue;
  margin-bottom: 20px;
}
</style>