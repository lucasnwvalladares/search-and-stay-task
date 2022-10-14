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
    <div class="del-upt-btns">
      <b-button>Update</b-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },

  computed: {
    pattern () {
      return this.$store.state.patterns.singlePattern
    }
  },

  methods: {
    paintSquares () {
      const bgSquare = document.getElementById('bg-square')
      bgSquare.setAttribute('background', 'green')
    }
  }
}
</script>
<style scope>
  .content {
    display: flex;
    gap: 10px;
  }

  .del-upt-btns {
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
