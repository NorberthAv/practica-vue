<template>
  <div class="container">
     
        <div class="about">
              
            <div class="row">
                <div class="col-12 center">
                  <div class="hero">
                      <div style="--i:1;"></div>
                      <div style="--i:2;"></div>
                      <div style="--i:3;"></div>
                      <div style="--i:4;"></div>
                      <div style="--i:5;"></div>
                        <h1 class="title">C<span>SS</span></h1>
                      <div style="--i:6;"></div>
                      <div style="--i:7;"></div>
                      <div style="--i:8;"></div>
                      <div style="--i:9;"></div>
                      <div style="--i:10;"></div>
                  </div>
                </div>
                <br>
                <div class="col-12">
                  <h1 v-if="pep == 'pepe'">This is an about page</h1>
                  <h1 v-else>This is an about no pepe</h1>
                </div>
                <div class="col-12">
                    <ul>
                        <li v-for="(item,i) in array" :key="i">{{item+' '+i}}</li>
                    </ul>
                </div>
                <div class="col-12">
                  <button @click="suma(1)" class="btn btn-success">click</button>
                  <br>
                {{ pep }}
                </div>
               
            </div>           
      </div>
  </div>
  
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const pep = 'pepe'
    console.log('create')
    const array = ref([1,2,3])
    const suma = (value) => {
      console.log('aqui')
      array.value.push(array.value.length+value)
    }
    onMounted(() => {
      // OnMounted = Document Ready
      console.log('mounted')
    })
    return {
      pep,
      array,
      suma,
    }
  },
}
</script>
<style scoped>
@media (min-width: 1024px) {
  .about {
   
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
.hero{
  position: relative;
  left: 60%;
  border: solid 2px;
  width: 200px;
  height: 200px;
}

.hero div{
  position: absolute;
  top: 0;
  left: 0px;
  text-decoration: none;
  width: 100%;
  height: 100%;
  transform: rotate(calc(36deg * var(--i)));
}
.title{
  justify-content: center;
  color: #000000;
  margin-top: 40%;
  text-align: center;

  text-shadow: 2px 4px 5px #000000;
}
h1 span{
  color: #2aef2a;
  text-shadow: 5px 4px 5px #2aef2a;
}
.hero div::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  box-sizing: border-box;
  background: transparent;
  border: 4px solid #2acf2a;
  box-sizing: border-box;
  box-shadow: 
  0 0 20px #2acf2a, 
  -30px -30px 0 #2acf2a,
  -30px -30px 20px #2acf2a,
  30px 30px 0 #2acf2a,
  30px 30px 20px #2acf2a,
  30px -30px 0 #2acf2a,
  30px -30px 20px #2acf2a,
  -30px 30px 0 #2acf2a,
  -30px 30px 20px #2acf2a;
  animation: animat 5s linear infinite;
  transform-origin: 100px;
}
@keyframes animat {

  0%{
    transform: rotate(0);
    filter: hue-rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>
