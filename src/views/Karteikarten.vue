<template>
  <h1>Deine Karteikarten</h1>
  <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
   <div class="card-header">{{kartei.englishWord}}</div>
    <div class="card-body">
      <h5 class="card-title">{{kartei.germanWord}}</h5>
      <p class="card-text">{{kartei.definition}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Kartei',
  data () {
    return {
      kartei: [
        {
          id: 1,
          englishWord: 'House',
          germanWord: 'Haus',
          definition: 'Gebäude, das Menschen zum Wohnen dient.'
        },
        {
          id: 2,
          englishWord: 'Stuhl',
          germanWord: 'Chair',
          definition: 'Mit vier Beinen, einer Rückenlehne und gelegentlich Armlehnen versehenes Sitzmöbel für eine Person.'
        }
      ]
    }
  },
  methods: {
    getKartei (kartei) {
      if (kartei.id === 1) {
        return 1
      } else if (kartei.id === 2) {
        return 2
      }
    }
  },
  mounted () {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/karteikarten'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    fetch(endpoint, requestOptions)
      .then(response => response.json())
      .then(result => result.forEach(kartei => {
        this.kartei.push(kartei)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
