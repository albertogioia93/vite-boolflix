<script>
// dopo aver installato dal terminale il pacchetto delle flags preso sul sito npm, lo importo nel componente e lo esporto in components
import CountryFlag from 'vue-country-flag-next'
export default {
    name: 'Hello',
    components: {
        CountryFlag
    },
    props: {
        info: Object
    },
    computed: {
        // creo una funzione per il caso delle lingue uguali parlate in più luoghi
        getLanguage() {
            switch (this.info.original_language) {
                case 'en':
                    return 'gb';
                case 'he':
                    return 'il';
                default:
                    return this.info.original_language
            }
        },
        // creo una funzione che prima divide il numero per 2 (devo cambiare i voti da 0 a 10 di default dell'api, per visualizzarli da 0 a 5)
        getVote() {
            // return this.info.vote_average / 2;
            return Math.ceil(this.info.vote_average / 2);
            // con Math.ceil arrotondo
        }
    }
}
</script>

<template>
    <!-- <article>
        <h3>{{ info.title }}</h3>
        <h4>Titolo originale: {{ info.original_title }}</h4>
        <div>Lingua: {{ getLanguage }}</div>
        <country-flag :country='getLanguage' size='normal' />
        <div>Voto: {{ getVote }}</div>
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
    </article> -->
    
    <!-- STO AGGIUNGENDO STO ARTICLE DEDICATO ALLE SERIE TV-->
    <!-- <article>
        <h3>{{ info.name }}</h3>
        <h4>Titolo originale: {{ info.original_name }}</h4>
        <div>Lingua: {{ getLanguage }}</div>
        <country-flag :country='getLanguage' size='normal' />
        <div>Voto: {{ getVote }}</div>
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
    </article> -->

    <!-- UNIONE DEI 2 ARTICLE CON 'OR' -->
    
    <article>

        <h3>{{ info.title || info.name }}</h3>
        <h4>Titolo originale: {{ info.original_title || info.original_name }}</h4>
        <div>Lingua: {{ getLanguage }}</div>
        <country-flag :country='getLanguage' size='normal' />
        <!-- con quella funzione (getVote) le bandierine del pacchetto delle flags si adattano al luogo switchato dalla lingua -->
        <div>Voto: {{ getVote }}</div>
        <font-awesome-icon icon="fa-solid fa-star" v-for="n in getVote" />
        <font-awesome-icon icon="fa-regular fa-star" v-for="n in 5 - getVote" />
        
    </article>

    <!-- Concateno l'URL base delle immagini di TMDB con una dimensione (w185 ad esempio) e la parte finale dell'URL della copertina del film o della serie passata dall'API, utilizzando la direttiva v-bind (:src) per inserire l'immagine come attributo src dell'elemento img. -->
    <img :src="'https://image.tmdb.org/t/p/w185' + info.poster_path" v-if="info.poster_path" />
    <!-- La condizione v-if assicura di mostrare l'immagine solo se l'API passa un URL valido per la copertina. -->

</template>

