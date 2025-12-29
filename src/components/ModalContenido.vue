
<template>
    <div class="modal">
    <span class="cerrar" @click="$emit('cerrar')">X</span>
        <img :src="image" :alt="named" class="modal-imagen" />
        <h2>Nombre: {{ named }}</h2>
        <p>Estado: {{ description }}</p>
        <p>Especie: {{ especie }}</p>
        <p>Género: {{ genero }}</p>
    </div>
</template>

<script>
    export default {
    name: "ModalContenido",
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
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    z-index: 1000;
    width: 300px;
    text-align: center;
    color: black;
}
.modal-imagen {
    width: 80%;
    border-radius: 8px;
    margin-bottom: 12px;
}
.cerrar {
    cursor: pointer;
    float: right;
    font-weight: bold;
}
</style>
