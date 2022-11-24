<template>
    <h1>Registro de productos</h1>
    <form @submit="sendform">
        <label for="name">Nombre:</label>
        <br>
        <input type="text" v-model="producto.name" id="name">
        <br>
        <label for="category_id">Categoria:</label>
        <br>
        <select v-model="producto.category_id" id="category_id">
            <option value="" disabled>Seleccione una categoria...</option>
            <option value="Hogar">Hogar</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Educación">Educación</option>
            <option value="Ocio">Ocio</option>
        </select>
        <br>
        <br>
    <input type="submit" value="Enviar" class="button-save">
    </form>

</template>
<script>
import {ref} from 'vue'
export default {
    
    
    emits:['data'],
    setup(props,context) {
        const producto = ref({})
        const sendform = (e) => {
            
            e.preventDefault();
            context.emit('data',producto.value)
    }
    
        
        return{
            producto,
            sendform,
           
        }
    },
}
</script>
<style scoped>
.button-save{
    position: abolute;
    border: none;
    color: #ffffff;
    width: 9em;
    height: 3em;
    line-height: 2em;
    text-align: center;
    background: linear-gradient(90deg, #03a9f4, #f441a5,#ffeb3b, #03a9f4);
    background-size: 300%;
    border-radius: 30px;
    text-transform: uppercase;
    cursor: pointer;
    z-index: 1;
}
.button-save:hover{
    animation: animation 8s linear infinite;
    border: none;
}
.button-save:before{
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    z-index: -1;
    background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
    background-size: 400%;
    border-radius: 35px;
    transition: 1s;
}
.button-save:hover::before{
    filter: blur(20px);
}
@keyframes animation{
    0% {background-position: 0%;}
    100% {background-position: 400%;}
}
</style>
