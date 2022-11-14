
<template>
  <main>
    <h1>{{banio}}</h1>
<h4>{{inicia}}</h4>
     <button @click="resta()">press</button>
  </main>
</template>

<script>

import { onMounted, ref } from "vue";
export default {
  setup() {

    const banio = 'banio'
    const inicia = 4

    const resta =() => { (inicia.value-4)

    }
 onMounted(() => {
      // OnMounted = Document Ready
      console.log('mounted')
    })
   
    return{
      banio,
      inicia,
      resta,
    }
  },
}
</script>
<style>

</style>