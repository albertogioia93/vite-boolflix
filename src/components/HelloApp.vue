<script>
    export default {
        name: 'Hello',
        props: {
            info: Object
        }
    }
</script>

<template>
    <article>
        <h3>{{ info.title }}</h3>
        <h4>Titolo originale: {{ info.original_title }}</h4>
        <div>Lingua: {{ info.original_language }}</div>
        <div>Voto: {{ info.vote_average }}</div>
    </article>
</template>

