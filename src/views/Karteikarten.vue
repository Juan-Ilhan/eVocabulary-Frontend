<template>
  <h1>Deine Karteikarten</h1>
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">House</div>
    <div class="card-body">
      <h5 class="card-title">Haus</h5>
      <p class="card-text">Gebäude, das Menschen zum Wohnen dient.</p>
    </div>
 </div>
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
    <div class="card-header">Chair</div>
    <div class="card-body">
      <h5 class="card-title">Stuhl</h5>
      <p class="card-text">Mit vier Beinen, einer Rückenlehne und gelegentlich Armlehnen versehenes Sitzmöbel für eine Person.</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Karteikarten',
  data () {
    return {
      cards: [
        {
          id: 1,
          englishWord: 'House',
          germanWord: 'Haus'
        },
        {
          id: 2,
          englishWord: 'Stuhl',
          germanWord: 'Chair'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
