<template>
  <h1>Deine Karteikarten</h1>
  <v-for> </v-for>
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
      karteien: []
    }
  },
  methods: {
    getKartei (kartei) {
      if (kartei.englishWord === 'House') {
        return kartei
      } else if (kartei.englishWord === 'Chair') {
        return kartei
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
        this.karteien.push(kartei)
      }))
      .catch(error => console.log('error', error))
  }
}
</script>

<style scoped>

</style>
