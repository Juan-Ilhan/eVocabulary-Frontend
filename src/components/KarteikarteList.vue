<template>
  <div class="col" v-for="kartei in karteien" :key="kartei.id">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">{{kartei.englishWord}}</div>
      <div class="card-body">
        <h5 class="card-title">{{kartei.germanWord}}</h5>
        <p class="card-text">{{kartei.definition}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KarteikarteList',
  components: {
  },
  props: {
    karteien: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
</style>
