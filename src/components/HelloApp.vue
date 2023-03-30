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
        // creo una funzione per il caso delle lingue uguali parlate in più luoghi
        computed: {
            getLanguage() {
                switch (this.info.original_language) {
                    case 'en':
                        return 'gb';
                    case 'he':
                        return 'il';
                    default:
                        return this.info.original_language
                }
            }
        }
    }
</script>

<template>
    <article>
        <h3>{{ info.title }}</h3>
        <h4>Titolo originale: {{ info.original_title }}</h4>
        <!-- con quella funzione le bandierine del pacchetto delle flags si adattano al luogo switchato dalla lingua -->
        <div>Lingua: {{ getLanguage }}</div>
        <country-flag :country='getLanguage' size='normal'/>
        <div>Voto: {{ info.vote_average }}</div>
    </article>
</template>

