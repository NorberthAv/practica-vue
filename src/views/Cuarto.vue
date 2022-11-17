
<template>
    <div class="container">
          <main>
                <h1>{{cuarto}}</h1>

        <div class="row">
                  <div class="col-12 col-md-6 col-lg-4"> 

                    <p>{{ 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+movies.poster_path}}</p>

                    <!-- <movieComp
                    :id="id"
                    :title="movie.title"
                    :synopsis="movie.synopsis"
                    :cover="movie.cover"
                    :like="movie.like"
                     />-->
        <img :src="'https://image.tmdb.org/t/p/w185_and_h278_bestv2'+movies.poster_path" :alt="movies.title">

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
 
</template>


<script>
import axios from 'axios'

import PlaceholderService from '@/services/PlaceholderService'
export default {
  setup (){
    const cuarto = 'Cuarto'
  },    
  name:'cuartos',
  data(){
  return {
    
    movies:[]
   
  }
},
    methods:{
      
    async getMovies (){

      const response = await axios.get('https://api.themoviedb.org/3/movie/550?api_key=a9236e426373aba1239a33342796c93a&language=en-US')
      // const response = await axios.get('https://jsonplaceholder.typicode.com/photos/? limit=12')
      let img="https://image.tmdb.org/t/p/w185_and_h278_bestv2"
      this.movies = response.data

      
    console.log(this.movies.homepage+this.movies.backdrop_path)
    // console.log(this.placeholders)
    }
    // async getMovies (){

    //   const response = await PlaceholderService.getMovies()
    //   this.placeholders = response.data

    //   console.log(this.placeholders)
    //   }

     },
    created(){

      this.getMovies()
    }

}
</script>

<style>
.img{
  max-width: 600px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

</style>
