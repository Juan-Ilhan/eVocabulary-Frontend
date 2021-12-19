<template>
<h1>Deine Karteikarten</h1>
  <div class="card" style="width: 18rem;">
    <div class="card" v-for="Karteikarten in Karteikarten" ;key='card.id'>
          <div class="card-body">
            <h5 class="card-title">englishWord</h5>
            <p class="card-text">germanWord</p>
          </div>
    </div>
   </template>


<script>
export default {
  name: 'Karteikarten',
  data () {
    return {
      cards: {
    {
      id: 1,
        englishWord: 'House',
      germanWord: 'Haus',
    }
      }
    }
  }



}
</script>

<style scoped>

</style>
