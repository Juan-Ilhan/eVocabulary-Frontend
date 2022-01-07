<template>
  <h1>Deine Karteikarten</h1>
  <div class ="container-fluid">
    <karteikarte-list :karteien="this.karteien"></karteikarte-list>
    <Karteikarten-create-form></Karteikarten-create-form>
    </div>
</template>,
<script>
export default {
  name: 'Kartei',
  components: {
    KarteikarteList,
    KarteikarteCreateForm
  },
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
