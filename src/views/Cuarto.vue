

<template>
 
    <div class="container">
          <main>
                <h1>{{cuarto}}</h1>
                <br>
                <div class="paginado text-center">
                    <b>
                      <button @click="resta(1)" v-if="pagina-1 > 0" class="btn btn-danger ">Anterior</button>
                      <button @click="ira(pagina-1)" v-if="pagina-1 > 0" class="btn btn-info" :class="pagina-1 == pgActual ? 'bg-primary text-white' : ''">{{ pagina-1 }}</button>
                      <button @click="ira(pagina)" class="btn btn-info" :class="pagina == pgActual ? 'bg-primary text-white' : ''">{{ pagina }}</button>
                      <button @click="ira(pagina+1)" v-if="pagina+1 < movies.total_pages" class="btn btn-info" :class="pagina+1 == pgActual ? 'bg-primary text-white' : ''">{{ pagina+1 }}</button>
                      <button @click="suma(1)" class="btn btn-success">Siguiente</button>
                    </b>
                  </div>
                <br>
        <div class="row">
                  <div v-for="movie in movies.results" class="col-12 col-md-6 col-lg-4"> 
                    <div class="card">
                        <div class="card-header">
                          <h2 v-if="movie.adult">+18</h2>
                            <h2 v-else>-18</h2>
                                  <img class="img" :src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+movie.poster_path" :alt="movie.title">
                            <h5 class="text-center">{{ movie.title }}</h5>
                        </div>
                        <div class="card-body">
                          <p class="info">{{ movie.overview }}</p>
                                <div id="app" class="footer">
                                      <a href=""
                                          class="btn icon icon-left btn-success"
                                          data-bs-toggle="modal"
                                          data-bs-target="#detallesModal"
                                          title="Detalles"
                                          @click="getMoviesDetalles(movie.id)"
                                        >
                                        <font-awesome-icon icon="list" />
                                    Detalles
                                      </a>
                                  
                                </div>
                        </div>
                     
                             

                    </div>
                     
                     <br>    
                     
                      </div> 
                </div>


               
                
                

                <!-- <div class="img">
                  <img v-for="(placeholder, i) in placeholders" :key="i" :src="placeholder.homepage+placeholder.backdrop_path" :alt="placeholder.title">
                </div> -->
                <!-- <div class="img">
                  <img v-for="(placeholder, i) in placeholders" :key="i" :src="placeholder.thumbnailURL" :alt="placeholder.title">
                </div> -->
                
          </main>
    </div>
 <moviedetail :detalles="moviesdetalle" />
</template>


<script>
import { ref } from 'vue'
import axios from 'axios'
import moviedetail from '@/components/moviedetail.vue'
// import PlaceholderService from '@/services/PlaceholderService'
export default {
  name: 'App',
  components:{
    moviedetail
  },
  setup (){
    const cuarto = 'Cuarto'
    const pagina = ref(1)
    const movies = ref([])
    const moviesdetalle = ref([])
    const pgActual = ref(1)


    const resta = async (value) => {

        pagina.value = pagina.value - value
        pgActual.value = pagina.value
        await getMovies()
  }
  const ira = async (value) =>{
    pagina.value = value
        pgActual.value = pagina.value
    await getMovies()

  }
  const suma = async (value) => {

        pagina.value = pagina.value + value
        pgActual.value = pagina.value
        await getMovies() 
  }
      const getMoviesDetalles = async (value) => {
        
        let movie_id = value

      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=a9236e426373aba1239a33342796c93a&language=en-US`)
        
        // const response = await axios.get('https://jsonplaceholder.typicode.com/photos/? limit=12')
        // let img="https://image.tmdb.org/t/p/w185_and_h278_bestv2"
        moviesdetalle.value = response.data
       console.log(moviesdetalle)
}    

      const getMovies = async () => {
  
        const response = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=a9236e426373aba1239a33342796c93a&language=en-US&page='+pagina.value)
        // const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=a9236e426373aba1239a33342796c93a&language=en-US')
        
        // const response = await axios.get('https://jsonplaceholder.typicode.com/photos/? limit=12')
        let img="https://image.tmdb.org/t/p/w185_and_h278_bestv2"
        movies.value = response.data
  
        
      console.log(movies.value.results[0].poster_path,response)
      // console.log(this.placeholders)
      }
      // async getMovies (){
  
      //   const response = await PlaceholderService.getMovies()
      //   this.placeholders = response.data
  
      //   console.log(this.placeholders)
      //   }
      getMovies()

      // Vue.component("modal", {
      //   template: "#modal-template"
      // });

      // // start app
      // new Vue({
      //   el: "#app",
      //   data: {
      //     showModal: false
      //   }
      // });
       
    
  return {
    resta,
    suma,
    pagina,
    cuarto,
    movies,
    moviesdetalle,
    pgActual,
    ira,
    getMoviesDetalles,

  }  
  }
}

</script>

<style>
p{
  text-align: justify;
}
.img{
  max-width: 100%;
  padding: auto;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.info{
  height: 150px;
  overflow: auto;
}
.card{
   padding: 5%;
   width: auto;
   height: 700px;
 
} 
.footer{
  padding: auto;
  bottom: 0px;
}

</style>
