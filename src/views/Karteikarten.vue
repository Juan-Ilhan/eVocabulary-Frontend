<template>
  <h1>Deine Karteikarten</h1>
  <div class="container-lg">
      <div class="col">
        <div class="row align-items-start">
        <karteikarte-list :karteien="this.karteien"></karteikarte-list>
   <KarteikartenCreateForm></KarteikartenCreateForm>
        </div>
      </div>
    </div>
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
