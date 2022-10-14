<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
    <h2>Create a New Pattern</h2>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group id="input-group-1" label="Bg Color:" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.calendar_patterns.bg_color"
          placeholder="e.g. #000000"
          required
        />
      </b-form-group>

      <b-form-group id="input-group-2" label="Text Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.calendar_patterns.text_color"
          placeholder="e.g. #000000"
          required
        />
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
      show: true
    }
  },
  methods: {
    onSubmit () {
      const data = {
        calendar_patterns: {
          bg_color: this.form.calendar_patterns.bg_color,
          text_color: this.form.calendar_patterns.text_color,
          active: this.form.calendar_patterns.active
        }
      }
      this.$store.dispatch('patterns/create', data.calendar_patterns)
        .then((res) => {
          alert(res.message)
          return res
        })
        .catch((error) => {
          alert(error.response)
          return error.response.data
        })
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
    }
  }
}
</script>
<style scope>

</style>
