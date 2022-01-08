<template>
  <h1>Deine Karteikarten</h1>
  <div class ="container-fluid">
    <karteikarte-list :karteien="this.karteien"></karteikarte-list>
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
  }
}
</script>

<style scoped>

</style>
