<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>Create a New Pattern</h2>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <b-form-group id="input-group-1" label="Bg Color:" label-for="input-1" @submit.stop.prevent>
        <b-form-input
          id="input-1"
          v-model="form.calendar_patterns.bg_color"
          maxLength="7"
          placeholder="e.g. #000000"
          required
          :state="bgColorValidation"
          @keydown="hashBg()"
        />
        <b-form-invalid-feedback :state="bgColorValidation">
          Not a Hex Color
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="bgColorValidation">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>

      <b-form-group id="input-group-2" label="Text Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.calendar_patterns.text_color"
          maxLength="7"
          placeholder="e.g. #000000"
          required
          :state="textColorValidation"
          @keydown="hashText()"
        />
        <b-form-invalid-feedback :state="textColorValidation">
          Not a Hex Color
        </b-form-invalid-feedback>
        <b-form-valid-feedback :state="textColorValidation">
          Looks Good.
        </b-form-valid-feedback>
      </b-form-group>

      <b-form-group id="input-group-3" label="Active:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.calendar_patterns.active"
          :options="isActive"
          required
        />
      </b-form-group>

      <b-button type="submit" variant="primary">
        Submit
      </b-button>
      <b-button type="reset" variant="danger">
        Reset
      </b-button>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  data () {
    return {
      form: {
        calendar_patterns: {
          bg_color: '',
          text_color: '',
          active: 1
        }
      },
      isActive: [1, 0],
      show: true,
      alphanumeric: /^[\p{L}\p{N}]*$/u,
      hexColor: /^#([0-9a-f]{3}){1,2}$/i
    }
  },
  computed: {
    bgColorValidation () {
      return this.hexColor.test(this.form.calendar_patterns.bg_color)
    },
    textColorValidation () {
      return this.hexColor.test(this.form.calendar_patterns.text_color)
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault()
      const data = {
        calendar_patterns: {
          bg_color: this.form.calendar_patterns.bg_color,
          text_color: this.form.calendar_patterns.text_color,
          active: this.form.calendar_patterns.active
        }
      }
      if (this.bgColorValidation && this.textColorValidation) {
        this.$store.dispatch('patterns/create', data.calendar_patterns)
          .then((res) => {
            alert(res.message)
            return res
          })
          .then(() => {
            this.onReset(e)
          })
          .catch((error) => {
            alert(error.response)
            return error.response.data
          })
      } else {
        alert('Invalid fields')
      }
    },
    onReset (event) {
      event.preventDefault()
      this.form.calendar_patterns.bg_color = ''
      this.form.calendar_patterns.text_color = ''
      this.form.calendar_patterns.active = 1
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    hashBg () {
      const inputBgHash = document.getElementById('input-1')
      this.startInputValue(inputBgHash)
      this.isNotAlphanumeric()
    },
    hashText () {
      const inputTextHash = document.getElementById('input-2')
      this.startInputValue(inputTextHash)
      this.isNotAlphanumeric()
    },
    startInputValue (inputElement) {
      if (inputElement.selectionStart === 0) {
        inputElement.value = '#'
      }
    },
    isNotAlphanumeric () {
      if (!window.event.key.match(this.alphanumeric)) {
        window.event.preventDefault()
      }
    }
  }
}
</script>
<style scope>

</style>
