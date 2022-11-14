<template>
  <div class="about">
    <h1 v-if="pep == 'pepe'">This is an about page</h1>
    <h1 v-else>This is an about no pepe</h1>
    <ul>
      <li v-for="(item,i) in array" :key="i">{{item+' '+i}}</li>
    </ul>
    <button @click="suma(5)">press</button>
    {{ pep }}
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
</style>
