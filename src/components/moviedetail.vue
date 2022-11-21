<template>
    <!-- template for the modal component -->
    <div
    class="modal fade text-left"
    id="detallesModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myModalLabel33"
    aria-hidden="true"
  >
    <div
      class="
        modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl
      "
      style="max-width: 90%"
      role="document"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="myModalLabel33">
            Detalles
          </h4>
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
          <font-awesome-icon icon="times" />
         
         
            <!-- <i class="fas fa-times"></i> -->
          </button>
        </div>
        <div class="modal-body">
          <div class="card-body">
            <div class="container">
                <div class="row">
                    
                        <div class="col-6">
                            <img class="img-detail" :src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+detalle.poster_path" :alt="detalle.title"/>
                        </div>
                        <div class="col-6">
                            <h1 class="text-center">{{detalle.title}}</h1>
                            <h5><b>Titulo Original:</b>&nbsp;{{ detalle.original_title }}</h5>
                            <h5><b>Audiencia:</b>&nbsp;{{ detalle.popularity }}</h5>
                            <h5><b>Fecha de Estreno:</b>&nbsp;{{ detalle.release_date }}</h5>
                            <h5><b>Idiomas:</b>&nbsp;</h5> <p>
                                <template v-for=" idioma in detalle.spoken_languages">&#x2022; {{ idioma.name }}&nbsp;
                                </template>
                                 </p> 
                                                  
                            <h5>Generos:</h5> <p>
                                <template v-for=" genero in detalle.genres">&#x2022; {{ genero.name }}&nbsp;
                                </template>
                                 </p> 
                             <h5>Descripción:</h5>
                             <p>{{ detalle.overview }}
                                <br>
                           
                           
                            
                          </p> 
                        </div>
                        <hr>
                        <div class="col-12">
                            <h5><b>Productoras:</b></h5> 
                            <div class="container">
                                <div class=" main row">
                                  
                                <template v-for=" compani in detalle.production_companies">
                                    <div class="col-3">
                                        <img :src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+compani.logo_path" class="img-logo col-12" />
                                   <br><p>{{ compani.name }}&nbsp;</p>
                                        
                                    </div>
                                    
                                </template>
                
                                    
                                </div>

                            </div>
                        </div>

                </div>
            </div>

            </div>
     
        <div class="modal-footer">
          <div class="buttons">
            <!-- <a href="#" class="btn icon icon-left btn-dark"
                                ><i data-feather="save"></i>Aceptar</a
                              > -->
            <a
              href="#"
              class="btn icon icon-left btn-danger"
              data-bs-dismiss="modal"
              aria-label="Close"
              ><i class="fas fa-times"></i> Cerrar</a
            >
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, ref, onUpdated } from 'vue';
const props = defineProps(['detalles'])
const detalle = ref({})


onUpdated(async () => {

    detalle.value = props.detalles
    console.log(detalle)
    console.log('Aqui---Z')
})
</script>
<style scoped>
.img-logo{
    width: auto;
    height: auto;
}
.img-detail{
    margin: 10%;
    background-image: cover;
    width: 80%;
    height: 80%;
}
</style>