<template>
  <div class="col" v-for="kartei in karteien" :key="kartei.id">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">{{kartei.englishWord}}</div>
      <div class="card-body">
        <h5 class="card-title">{{kartei.definition}}</h5>
      <div class="dropdown">
        <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Übersetzung
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="{{kartei.germanWord}}">{{kartei.germanWord}}</a></li>
        </ul>
      </div>
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
