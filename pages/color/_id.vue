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
            <div id="bg-square" class="square" />
            {{ pattern.bg_color }}
          </b-row>
        </td>
      </tr>
      <tr>
        <th>Text-Color</th>
        <td>
          <b-row class="row">
            <div id="text-square" class="square" />
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
      <b-form-group id="input-group-1" label="Bg Color:" label-for="input-1">
        <b-form-input
          id="input-1"
          :value="pattern.bg_color"
          placeholder="e.g. #000000"
          required
          @input="updateBg"
        />
      </b-form-group>

      <b-form-group id="input-group-2" label="Text Color:" label-for="input-2">
        <b-form-input
          id="input-2"
          :value="pattern.text_color"
          placeholder="e.g. #000000"
          required
          @input="updateText"
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
      show: false
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
  },

  methods: {
    paintSquares () {
      const bgSquare = document.getElementById('bg-square')
      bgSquare.setAttribute('background-color', '#434165')
    },
    showForm () {
      this.show = true
      const btn = document.getElementById('btnUpdate')
      btn.style.display = 'none'
    },
    onSubmit () {
      const id = this.form.calendar_patterns.id
      const data = {
        calendar_patterns: {
          bg_color: this.form.calendar_patterns.bg_color,
          text_color: this.form.calendar_patterns.text_color,
          active: this.form.calendar_patterns.active
        }
      }
      this.$store.dispatch('patterns/update', { id, data: data.calendar_patterns })
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
    },
    updateBg (e) {
      this.form.calendar_patterns.bg_color = e
    },
    updateText (e) {
      this.form.calendar_patterns.text_color = e
    },
    updateActive (e) {
      this.form.calendar_patterns.active = e
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

  .square {
    --size: 20px;
    height: var(--size);
    width: var(--size);
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
