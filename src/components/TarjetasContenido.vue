<template>
    <div class="ficha">
        <h2>{{ nombre }}</h2>
        <p>{{ descripcion }}</p>
    </div>
    
</template>

<script>
    import { getPersonajes } from '../Api';
    export default {
    name: "ContenidoTarjetas",
    data() {
    return {
        personajes: []
    };
    },
    async mounted() {
        this.personajes = await getPersonajes();
    }
};
</script>