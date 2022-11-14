
<template>
  <div class="container">

      <main>

            <h1 class="text-center">{{cocina.toUpperCase()}}</h1>
        <div id="Buttons" class="text-center">
            <button @click="resta(1)" :class="btn2">restar</button>
            <button @click="suma(1)" :class="btn1">sumar</button>
            <button @click="add()" :disabled="bloquearBTNADD" :class="btn3">Añadir a Arreglo</button>
        </div>
        <br>
        <h1 :class="classcomputer"> {{ inicia }}  </h1>


            

            <h3 class="text-center">Separador--------------------------- Añadir a favoritos</h3>

            {{ arrayfavoritos }}

            <ul>
                <li v-for="(num, index) in arrayfavoritos" :key="index">

                    {{ num }}

                </li>

            </ul>

            <h3 class="text-center">Separador--------------------------- Añadir a favoritos</h3>



          

            <!-- <h1 :class="inicia > 0 ? 'positivo' : 'negativo'"> {{ inicia }}  </h1> -->
            <h1 class="text-center"> {{activo ? "estoy activo" : "estoy Inactivo"}}</h1>
            <h3 class="text-center">Separador--------------------------------------- For Comun</h3>
            <ul>
              <li v-for="(fruta, index) in arrayfrutasimple" :key="index">

              {{index }} - {{ fruta }}

              </li>
            </ul>

            <h3 class="text-center">Separador--------------------------------------- For Arreglo</h3>

            <ul>
              <h1 class="text-center">Con Templace </h1>
                <template v-for="fruta in arrayfruta" :key="fruta.id">
                  <li v-if="fruta.id > 1">

                  {{fruta.name }} - {{ fruta.price }} - {{ fruta.description }}

                  </li>

                </template>
              <hr>
                <h1 v-if="activo === true" class="text-center">Con Span </h1>
              <li v-if="activo === true" v-for="fruta in arrayfruta" :key="fruta.id">
                <span v-if="fruta.id > 1">
                  {{fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
                </span>  

                </li> 
            </ul>
            <h3 class="text-center">Separador--------------------------------------- For Objeto</h3>
            <ul>
              <li v-for="(value, propiedad, index) in objetofruta" :key="index">

              {{  index }}- {{propiedad }} - {{ value}} 

              </li>
            </ul>


            <h3 v-show="activo" class="text-center">Estoy activo v-show</h3>

            <p v-if="!activo">
              estoy Inactivo validando
            </p>
            <p v-else-if ="activo === true">
              estoy Activo validando
            </p>
            <p v-else>
              estoy Indeciso
            </p>


        </main>

  </div>
       
</template>

<script>

import { onMounted, ref ,computed} from "vue";

// ref = variable reactiva;
// onMonted = Documen Ready;
// computed = evaluador de variable

export default {
  setup() {

    const bloquearBTNADD = computed(()=>{

      const numsearch = arrayfavoritos.value.find(num => num === inicia.value)

      return numsearch || numsearch === 0
      // solucion con if----------------------
      // console.log(numsearch)
      // if(numsearch === 0) return true
      // return numsearch ? true : false;
      // -----------------------------------
      
    })
    const add = () =>{

    arrayfavoritos.value.push(inicia.value)

    }
    
    const arrayfavoritos = ref([])
    const classcomputer = computed(()=>{

      if(inicia.value === 0){
        return 'cero text-center'
      }
      if(inicia.value > 0){
        return 'positivo text-center'
      }
      if(inicia.value < 0){
        return 'negativo text-center'
      }

    });
    const arrayfrutasimple =['🍎','🍐','🍋','🍇']
    const arrayfruta = [
      
    {
    name:"manzana",
    price:"25.00$",
    description:"roja sangre",
    id:1,
  },
    {name:"Pera",
    price:"28.00$",
    description:"verdo arbol",
    id:2,
  },
    {name:"Limon",
    price:"22.00$",
    description:"amarrillo pollo",
    id:3,
  },
    {name:"uva",
    price:"30.00$",
    description:"morado magico",
    id:4,
  },

  ];
  const objetofruta ={
    name:"uva",
    price:"30.00$",
    description:"morado magico",
    id:4,
  } 
    const btn3  = "btn2"
    const btn1 = "btn1"
    const btn2 = "btn3"
    const activo = true
    const cocina = 'cocina'
    const inicia =  ref(0)
 

    const resta = (value) => {

      inicia.value = inicia.value - value
 
    }
    const suma = (value) => {

      inicia.value = inicia.value + value
  
    }

    // const resta =() => { (inicia-1)

    // }
 onMounted(() => {
      // OnMounted = Document Ready
      console.log('mounted')
    })
   
    return{
      cocina,
      arrayfavoritos,
      objetofruta,
      arrayfrutasimple,
      bloquearBTNADD,
      arrayfruta,
      btn3,
      btn1,
      btn2,
      activo,
      inicia,
      classcomputer,
      resta,
      suma,
      add,
    }
  },
}
</script>
<style scoped>

.btn3{ 
      padding: 4px;
       text-align: center;
       color:#ffffff;
       background-color: rgb(161, 22, 41);
       align-items: center;
    }
    .btn3:hover{
      padding: 4px;
      cursor: pointer;
      background-color:#ffffff;
      color: #000000;
      align-items: center;
      text-align: center;
    }
    .btn2{ 
      padding: 4px;
       text-align: center;
       color:#ffffff;
       background-color: rgb(197, 20, 159);
       align-items: center;
    }
    .btn2:hover{
      padding: 4px;
      cursor: pointer;
      background-color:#ffffff;
      color: #000000;
      align-items: center;
      text-align: center;
    }
    .btn1{ 
      padding: 4px;
       text-align: center;
       color:#ffffff;
       background-color: rgb(15, 211, 218);
       align-items: center;
    }
    .btn1:hover{
      padding: 4px;
      cursor: pointer;
      background-color:#ffffff;
      color: #000000;
      align-items: center;
      text-align: center;
    }
    .positivo{
      color: rgb(39, 170, 78);
    }
    .negativo{
      color: rgb(255, 47, 47);
    }
    .cero{
      color:orange;
    }
</style>
