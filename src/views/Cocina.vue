
<template>
  <div class="container">

      <main>
        <br>
        <h1 class="text-center">{{cocina.toUpperCase()}}</h1>
        <div class="row">

              <div id="Buttons" class="text-center col-12">
                  <b>
                    <button @click="resta(1)" :class="btn2">restar</button>
                    <button @click="add()" :disabled="bloquearBTNADD" :class="btn3">Añadir a Arreglo</button>
                    <button @click="suma(1)" :class="btn1">sumar</button>
                  </b> 
              </div>
        <br>
        <h1 :class="classcomputer"> {{ inicia }}  </h1>
           

  <hr>
            <h5>favoritos ❤</h5>
            {{ arrayfavoritos }}
                  <ul>
                        <li v-for="(num, index) in arrayfavoritos" :key="index" class="list-group">
                          <!-- rudimentario -->
                          <!-- <h1 :class="num == 0 ? 'cero' : num > 0 ? 'positivo' : 'negativo'">{{ num }}</h1>  -->
                          <!-- funcion -->
                          <h1 :class="classnum(num)">{{ num }}</h1> 
                        </li>
                  </ul>
            <div class="col-12">
              <h2>Estatus:</h2>
                <select  @change="cambio($event)" id="activo" class="form-select">
                  <option value="0" disabled selected>Seleccione un estado ...</option>
                  <option value="true">Activo</option>
                  <option value="false">Inactivo</option>
                </select>
                <br>
            <!-- <h1 :class="inicia > 0 ? 'positivo' : 'negativo'"> {{ inicia }}  </h1> -->
            <h2 class="text-center"> {{activo ? "estoy activo" : "estoy Inactivo"}}</h2>
          
            </div>
            <br>
            <hr>
        
            <div class="col-4 ">
                <div class="card">
                    
                    <h3>For Comun</h3>
                        <ul>
                            <li v-for="(fruta, index) in arrayfrutasimple" :key="index">
                            {{index }} - {{ fruta }}
                            </li>
                        </ul>
                </div>
  
            </div>
   
            <div class="col-4 ">

              <div class="card">
               
                  <h3>For Objeto</h3>
                    <ul>
                        <li v-for="(value, propiedad, index) in objetofruta" :key="index">

                        {{  index }}- {{propiedad }} - {{ value}} 

                        </li>
                    </ul>
              </div>
  

            </div>
            <div class="col-4">
              <div class="card">

         
                  <h3>For Arreglo</h3>
                      <ul>
                        <h5>Con Templace :</h5>
                          <template v-for="fruta in arrayfruta" :key="fruta.id">
                              <li v-if="fruta.id > 1">
                              {{fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
                              </li>
                          </template>
               
                          <h5 v-if="activo === true">Con Span : </h5>
                            <li v-if="activo === true" v-for="fruta in arrayfruta" :key="fruta.id">
                              <span class="classcomputer">
                                  {{fruta.name }} - {{ fruta.price }} - {{ fruta.description }}
                              </span>  
                            </li> 
                      </ul>
              </div>
  
            </div>
  <hr>     
                  <h3 v-show="activo" class="text-center">Estoy activo v-show</h3>
  <hr>
            <h5>Validacion de session</h5>

                  <p v-if="!activo">
                    estoy Inactivo validando
                  </p>
                  <p v-else-if ="activo === true">
                    estoy Activo validando
                  </p>
                  <p v-else>
                    estoy Indeciso
                  </p>

          </div>
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
    const classnum = (valor)=>{ 

      if(valor === 0){
        return 'cero '
      }
      if(valor > 0){
        return 'positivo '
      }
      if(valor < 0){
        return 'negativo '
      }

    }
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
    const btn3  = "btn btn-outline-warning botones"
    const btn1 = "btn btn-outline-success botones"
    const btn2 = "btn btn-outline-danger botones"
    const activo = ref(true)
    const cocina = 'cocina'
    const inicia =  ref(0)

    const cambio = (value) => {

      let valor = value.target.value
   
      activo.value = valor == 'true' ? true : false;
    }
    

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
      classnum,
      resta,
      suma,
      add,
      cambio,
    }
  },
}
</script>
<style scoped>

.botones{ 
      padding: 4px;
      margin: 5px;
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
    .card{
      border: black 2px solid;
      border-radius: 14px;
      padding: 5px;
      align-content: center;
      height: 100%;
    }
    .card h3{
      text-align: center;
    }
</style>
