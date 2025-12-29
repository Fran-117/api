
<template>
    <div class="modal">
        <img :src="image" :alt="named" class="modal"/>
        <h2>Nombre: {{ named }}</h2>
        <p>Estado: {{ description }}</p>
        <p>Especie: {{ especie }}</p>
        <p>Género: {{ genero }}</p>
    </div>
    
</template>

<script>
    export default {
    name: "TarjetasContenido",
    props: {
        named: String,
        description: String,
        image: String,
        especie: String,
        genero: String
    }
};
</script>

<style scoped>
    .modal {
        justify-content: center;
        width: 400px;
        border: 1px solid #98989869;    
    }
</style>
