<template>
    <div class="container" style="border:1px solid;padding: 5rem;">
        <main>
        <h2 class="text-center">{{ sala }}</h2>
        <br>
            <div class="col-12 row" >
                   
                    <div class="col-6">
                        <createproductos @data="pepe"></createproductos>
                    </div>
                    <div class="col-6">
                        <h4>lista de productos</h4>
                        <hr>
                            <div v-for="p in productos" :key="p.id">
                                <h4><b>Nombre:</b> &nbsp;{{ p.name }}</h4>
                                <h4><b>Categoria:</b>&nbsp;{{ p.category_id }}</h4>
                            </div>
                    </div>
            </div>
        </main>
    </div>  
</template>
<script>
import {ref, onMounted} from 'vue'
import createproductos from '@/components/productos/createproductos.vue'
export default {
    components:{
    createproductos
  },
   
    setup() {

        const productos =ref([])
        const sala = 'Sala de Estar'
        
        const pepe =(value) =>{
            const valor = JSON.parse(JSON.stringify(value))
             productos.value.push(valor)
        }
        return{
            productos,
            sala,
            pepe,
        }
    },
}
</script>
<style scoped>

</style>