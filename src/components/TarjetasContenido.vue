<template>
    <div class="ficha">
        <img :src="image" :alt="named" class="ficha-imagen"/>
        <h2>{{ named }}</h2>
        <p>{{ description }}</p>
    </div>
    
</template>

<script>
    export default {
    name: "TarjetasContenido",
    props: {
        named: String,
        description: String,
        image: String
    }
};
</script>

<style scoped>
.ficha {
    justify-content: center;
    width: 500px;
    border: 1px solid #98989869;
    border-radius: 12px;
    padding: 16px;
    margin: 12px;
    text-align: center;
    background: rgba(174, 174, 174, 0.462);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.ficha-imagen {
    width: 50%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 12px;
}

.ficha {
  border: 2px solid red;
}


</style>
