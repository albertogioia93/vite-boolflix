<script>
// LIBRERIE
import axios from 'axios';
// FUNZIONI
import { store } from './store';
import HelloApp from './components/HelloApp.vue';

export default {
  name: 'App',
  components: {
    HelloApp
  },
  data() {
    return {
      store,
      searchTerm: ''
    }
  },
  methods: {
    searchMovies() {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=b01fec227b714470bbc304ad4ef56c14&query=${this.searchTerm}`)
        .then(response => {
          this.store.movies = response.data.results;
        });
    }
  },
}
</script>

<template>
  <div>
    <div>
      <input type="text" v-model="searchTerm" placeholder="Cerca film...">
      <button @click="searchMovies">Cerca</button>
    </div>
    <div v-if="store.movies.length > 0">
      <ul>
        <li v-for="movie in store.movies" :key="movie.id">
          <h2>{{ movie.title }}</h2>
          <p>Titolo originale: {{ movie.original_title }}</p>
          <p>Lingua: {{ movie.original_language }}</p>
          <p>Voto: {{ movie.vote_average }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss">
// versione 1 - via app.vue
// @use './assets/scss/main.scss' as *;
</style>

