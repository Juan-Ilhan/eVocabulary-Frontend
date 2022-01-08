<template>
  <h1>Deine Karteikarten</h1>
  <div class="container">
    <div class="row align-items-start">
      <div class="col">
        <karteikarte-list :karteien="this.karteien"></karteikarte-list>
      </div>
      <div class="col">
      </div>
      <div class="col">
      </div>
    </div>
  </div>
   <KarteikartenCreateForm></KarteikartenCreateForm>
</template>

<script>
import KarteikarteList from '@/components/KarteikarteList'
import KarteikartenCreateForm from '@/components/KarteikartenCreateForm'

export default {
  name: 'Kartei',
  components: {
    KarteikarteList,
    KarteikartenCreateForm
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
