<!-- <script>
import axios from 'axios';
export default {
    name: 'Hello'
}
</script>

<template>
    <div>
        <h1>Template Iniziale</h1>

    </div>
</template>


<style lang="scss" scoped></style> -->


<script>

export default {
    name: 'Flag',
    props: {
        code: {
            type: String,
            required: true
        }
    },
    computed: {
        flag() {
            if (this.code) {
                // Mappa dei codici delle nazioni ai nomi delle bandiere
                const flags = {
                    'en': 'us',
                    'it': 'it'
                    // Aggiungere altre mappature qui...
                };
                return flags[this.code.toLowerCase()] || '';
            }
            return '';
        }
    }
}
</script>

<template>
    <span v-if="flag" :class="'flag-icon flag-icon-' + flag"></span>
    <span v-else></span>
</template>