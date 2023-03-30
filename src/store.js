// *********************************
// SOLUZIONE 1
// *********************************

// import { reactive } from "vue";
// export const store = reactive({
//     movies: [],
// })


// **********************************
// soluzione 2
// **********************************

import { reactive } from "vue";
export const store = reactive({
    config: {
        urlMovie: 'https://api.themoviedb.org/3/search/movie',
        apiKey: 'b01fec227b714470bbc304ad4ef56c14',
        defaultLang: 'it-IT'
    },
    movies: [],
    searchKey: ''
});