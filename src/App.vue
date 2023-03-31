<!-- SOLUZIONE 1 -->

<!-- <script>
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
</template> -->

<!-- SOLUZIONE 2 -->

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
    // search() {
    //   axios.get(this.store.config.urlMovie, {
    //     params: {
    //       api_key: this.store.config.apiKey,
    //       language: this.store.config.defaultLang,
    //       query: this.store.searchKey
    //     }
    //   }).then(response => {
    //     this.store.movies = response.data.results;
    //   });
    // },
    // // MODIFICA 1
    // searchTvshow() {
    //   axios.get(this.store.config.urlTvshow, {
    //     params: {
    //       api_key: this.store.config.apiKey,
    //       language: this.store.config.defaultLang,
    //       query: this.store.searchKey
    //     }
    //   }).then(response => {
    //     this.store.tvshow = response.data.results;
    //   });
    // }
    // // FINE MODIFICA 1

    searchAll() {
      // esegui la chiamata API per cercare i film
      axios.get(this.store.config.urlMovie, {
        params: {
          api_key: this.store.config.apiKey,
          language: this.store.config.defaultLang,
          query: this.store.searchKey
        }
      }).then(movieResponse => {
        // esegui la chiamata API per cercare le serie TV
        axios.get(this.store.config.urlTvshow, {
          params: {
            api_key: this.store.config.apiKey,
            language: this.store.config.defaultLang,
            query: this.store.searchKey
          }
        }).then(tvshowResponse => {
          // unisci i risultati delle due chiamate API in un unico array
          const movies = movieResponse.data.results;
          const tvshows = tvshowResponse.data.results;
          const allResults = movies.concat(tvshows);
          // salva i risultati nella variabile tvshow dello store
          this.store.tvshow = allResults;
        });
      });
    }

  },

}
</script>

<template>
  <header>
    <h1>BOOLFLIX</h1>
    <!-- <input type="text" placeholder="Cerca film..." v-model="store.searchKey"> -->
    <input type="text" placeholder="Cerca film o serie TV..." v-model="store.searchKey">
    <!-- <button @click="search">Cerca</button> -->

    <!-- HO AGGIUNTO QUESTO BUTTON searchTvshow -->
    <!-- <button @click="searchTvshow">Cerca serie TV</button> -->

    <!-- HO AGGIUNTO QUESTO BUTTON PER CERCARE ENTRAMBI -->
    <button @click="searchAll">Cerca</button>
  </header>

  <main class="container">
    <ul>
      <li v-for="movie in store.movies">
        <!-- passo solo una props (:info) e deciderà lei quali campi di helloapp riempire in base all'oggetto che riceve -->
        <HelloApp :info="movie" />
      </li>

      <!-- HO AGGIUNTO LI TVSHOW -->
      <li v-for="tvshow in store.tvshow">
        <HelloApp :info="tvshow" />
      </li>

    </ul>
  </main>
</template>



<style lang="scss">
// versione 1 - via app.vue
// @use './assets/scss/main.scss' as *;
header {
  padding: 100px;
  text-align: center;
  background-color: black;
}

h1 {
  font-size: 50px;
  color: red;
  margin-bottom: 30px;
}

input {
  width: 500px;
  height: 40px;
  border-style: none;
  border-radius: 10px;
  margin: 10px;
}

button {
  width: 100px;
  height: 40px;
  border-style: none;
  border-radius: 10px;
}

.container {
  padding: 100px;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

li {
  margin: 20px;
}
</style>

