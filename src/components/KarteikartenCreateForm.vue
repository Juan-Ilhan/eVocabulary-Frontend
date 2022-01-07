<template>
  <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Toggle right offcanvas</button>
<i class="bi bi-kartei-plus-fill"></i>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    <div class="offcanvas-header">
      <h5 id="offcanvasRightLabel">Neue Karteikarte</h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <div class="mb-3">
        <label for="german-word" class="form-label">German Word</label>
        <input type="text" class="form-control" id="german-word" placeholder="Example input placeholder" v-model="germanWord">
      </div>
      <div class="mb-3">
        <label for="english-word" class="form-label">English Word</label>
        <input type="text" class="form-control" id="english-word" placeholder="Another input placeholder" v-model="englishWord">
      </div>
      <div class="mb-3">
      <label for="defintion" class="form-label">Definition</label>
      <input type="text" class="form-control" id="defintion" placeholder="Another input placeholder" v-model="definiton">
    </div>
    <button class="btn btn-primary me-3" type="submit" @click="getKartei">Create</button>
    </div>;
  </div>
</template>

<script>

export default {
  name: 'KarteikartenCreateForm',
  data () {
    return {
      germanWord: '',
      englishWord: '',
      definiton: ''

    }
  },
  methods: {
    getKartei () {
      const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/karteikarten'

      const myHeaders = new Headers()
      myHeaders.append('Content-Type', 'application/json')

      const payload = JSON.stringify({
        englishWord: this.englishWord,
        germanWord: this.germanWord,
        definition: this.definiton
      })

      const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: payload,
        redirect: 'follow'
      }

      fetch(endpoint, requestOptions)
        .catch(error => console.log('error', error))
    }
  }
}
</script>

<style scoped>
.sticky-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  border-radius: 30px;
}
</style>
