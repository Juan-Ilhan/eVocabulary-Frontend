<template>
  <div class="col" v-for="kartei in karteien" :key="kartei.id">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
      <div class="card-header">{{kartei.englishWord}}</div>
      <div class="card-body">
        <h5 class="card-title">{{kartei.germanWord}}</h5>
        <p class="card-text">{{kartei.definition}}</p>
        <button type="button" class="btn btn-warning btn-circle"><i class="glyphicon glyphicon-remove"></i></button>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'KarteikarteList',
  props: {
    karteien: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.btn-circle {
  width: 15px;
  height: 15px;
  text-align: center;
  padding: 6px 0;
  font-size: 12px;
  line-height: 1.428571429;
  border-radius: 5px;
}
</style>
