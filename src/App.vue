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
  data(){
    return {
      store
    }
  },
  created() {
        // axios.get('inserisci indirizzo della API')
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=b01fec227b714470bbc304ad4ef56c14')
            .then ((response) => {
                console.log(response);
                // const characters = response.data.data.splice(0, 100);
                // this.store.characters = characters
                // this.store.charactersFound = characters.length
            });

  }
}
</script>

<template>
  <HelloApp />
 
</template>

<style lang="scss">
// versione 1 - via app.vue
// @use './assets/scss/main.scss' as *;
</style>

