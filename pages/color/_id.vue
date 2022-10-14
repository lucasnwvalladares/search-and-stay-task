<template>
  <div class="content">
    <table>
      <tr>
        <th>Id</th>
        <td>{{ pattern.id }}</td>
      </tr>
      <tr>
        <th>Bg-Color</th>
        <td>
          <b-row class="row">
            {{ pattern.bg_color }}
          </b-row>
        </td>
      </tr>
      <tr>
        <th>Text-Color</th>
        <td>
          <b-row class="row">
            {{ pattern.text_color }}
          </b-row>
        </td>
      </tr>
      <tr>
        <th>Active</th>
        <td>{{ pattern.active }}</td>
      </tr>
      <tr>
        <th>Order</th>
        <td>{{ pattern.order }}</td>
      </tr>
    </table>
    <div class="update-btn">
      <b-button id="btnUpdate" @click="showForm">
        Update
      </b-button>
    </div>
    <b-form v-if="show" @submit="onSubmit" @reset="onReset">
      <h3>Update Color Pattern</h3>
      <b-form-group id="input-group-1" label="Bg Color:" label-for="input-1">
        <b-form-input
          id="input-1"
          maxLength="7"
          :value="pattern.bg_color"
          placeholder="e.g. #000000"
          required
          @input="updateBg"
          @keydown="inputBgValidation()"
        />
        <b-form-input
          :value="form.calendar_patterns.bg_color"
          type="color"
        />
      </b-form-group>

      <b-form-group id="input-group-2" label="Text Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          maxLength="7"
          :value="pattern.text_color"
          placeholder="e.g. #000000"
          required
          @input="updateText"
          @keydown="inputTextValidation()"
        />
        <b-form-input
          :value="form.calendar_patterns.text_color"
          type="color"
        />
      </b-form-group>

      <b-form-group id="input-group-3" label="Active:" label-for="input-3">
        <b-form-select
          id="input-3"
          :value="pattern.active"
          :options="isActive"
          required
          @input="updateActive"
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
          id: '',
          bg_color: '',
          text_color: '',
          active: 1
        }
      },
      isActive: [1, 0],
      show: false,
      alphanumeric: /^[\p{L}\p{N}]*$/u,
      hexColor: /^#([0-9a-f]{3}){1,2}$/i
    }
  },

  computed: {
    pattern () {
      return this.$store.state.patterns.singlePattern
    }
  },

  created () {
    this.form.calendar_patterns.id = this.pattern.id
    this.form.calendar_patterns.bg_color = this.pattern.bg_color
    this.form.calendar_patterns.text_color = this.pattern.text_color
    this.form.calendar_patterns.active = this.pattern.active
    this.inputBgColor = this.pattern.bg_color
  },

  methods: {
    showForm () {
      this.show = true
      const btn = document.getElementById('btnUpdate')
      btn.style.display = 'none'
    },
    onSubmit (event) {
      event.preventDefault()
      const id = this.form.calendar_patterns.id
      const data = {
        calendar_patterns: {
          bg_color: this.form.calendar_patterns.bg_color,
          text_color: this.form.calendar_patterns.text_color,
          active: this.form.calendar_patterns.active
        }
      }
      if (this.hexColor.test(data.calendar_patterns.bg_color) && this.hexColor.test(data.calendar_patterns.text_color)) {
        this.$store.dispatch('patterns/update', { id, data: data.calendar_patterns })
          .then((res) => {
            alert(res.message)
            return res
          })
          .catch((error) => {
            alert(error.response)
            return error.response.data
          })
      } else {
        alert('Invalid hex code for colors')
      }
    },
    onReset (event) {
      event.preventDefault()
      this.form.calendar_patterns.bg_color = this.pattern.bg_color
      this.form.calendar_patterns.text_color = this.pattern.text_color
      this.form.calendar_patterns.active = this.pattern.active
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    updateBg (e) {
      this.form.calendar_patterns.bg_color = e
    },
    updateText (e) {
      this.form.calendar_patterns.text_color = e
    },
    updateActive (e) {
      this.form.calendar_patterns.active = e
    },
    inputBgValidation () {
      const inputBgHash = document.getElementById('input-1')
      this.startInputValue(inputBgHash)
      this.isNotAlphanumeric()
    },
    inputTextValidation () {
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
  .content {
    display: flex;
    gap: 10px;
  }

  .update-btn {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  table {
    border: 1px solid black;
    row-gap: 10px;
    min-width: 400px;
  }

  th {
    background: lightblue;
    width: 30%;
    justify-items: right;
  }

  table tr th, table tr td {
    padding: 10px;
    border: 1px solid black;
  }

  .row {
    padding-left: 15px;
    align-items: center;
    gap: 10px;
  }

  .row:first-of-type {
    background: inherit;
  }
</style>
