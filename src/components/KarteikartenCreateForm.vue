<template>
  <button class="btn btn-success sticky-button" data-bs-toggle="offcanvas" data-bs-target="#karteien-create-offcanvas" aria-controls="#karteien-create-offcanvas">
    <i class="bi bi-kartei-plus-fill">Karteikarte erstellen</i>
  </button>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="karteien-create-offcanvas" aria-labelledby="offcanvas-label">
    <div class="offcanvas-header">
      <h5 id="offcanvas-label">Neue Kartei</h5>
      <button type="button" id="close-offcanvas" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body">
      <form class="text-start needs-validation">
        <div class="mb-3">
          <label for="germanWord" class="form-label">Deutsches Wort</label>
          <input type="text" class="form-control" id="germanWord" v-model="germanWord" required>
          <div class="invalid-feedback">
            Bitte trage ein deutsches Wort ein.
          </div>
        </div>
        <div class="mb-3">
          <label for="englishWord" class="form-label">Englisches Wort</label>
          <input type="text" class="form-control" id="englishWord" v-model="englishWord" required>
          <div class="invalid-feedback">
            Bitte trage ein englisches Wort ein.
          </div>
        </div>
        <div class="mb-3">
          <label for="definition" class="form-label">Definition</label>
          <input type="text" class="form-control" id="definition" v-model="definition" required>
          <div class="invalid-feedback">
            Bitte trage die Definition ein.
          </div>
        </div>
        <div v-if="this.serverValidationMessages">
          <ul>
            <li v-for="(message, index) in serverValidationMessages" :key="index" style="color: red">
              {{ message }}
            </li>
          </ul>
        </div>
        <div class="mt-5">
          <button class="btn btn-primary me-3" type="submit" @click="createKartei">Create</button>
          <button class="btn btn-danger" type="reset">Reset</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KarteikartenCreateForm',
  data () {
    return {
      englishWord: '',
      germanWord: '',
      definition: '',
      serverValidationMessages: []
    }
  },
  methods: {
    createKartei () {
      const valid = this.validate()
      if (valid) {
        const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/karteikarten'

        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        const payload = JSON.stringify({
          englishWord: this.englishWord,
          germanWord: this.germanWord,
          definition: this.definition
        })

        const requestOptions = {
          method: 'POST',
          headers: headers,
          body: payload,
          redirect: 'follow'
        }

        fetch(endpoint, requestOptions)
          .catch(error => console.log('error', error))
      }
    },
    validate () {
      let valid = true
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.querySelectorAll('.needs-validation')

      // Loop over them and prevent submission
      Array.prototype.slice.call(forms)
        .forEach(function (form) {
          form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
              valid = false
              event.preventDefault()
              event.stopPropagation()
            }

            form.classList.add('was-validated')
          }, false)
        })
      return valid
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
