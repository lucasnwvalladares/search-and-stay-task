<template>
  <div class="content">
    <table>
      <tr>
        <th>Id</th>
        <td>{{ color.id }}</td>
      </tr>
      <tr>
        <th>Bg-Color</th>
        <td>
          <b-row class="row">
            <div id="bg-square" class="square" />
            {{ color.bg_color }}
          </b-row>
        </td>
      </tr>
      <tr>
        <th>Text-Color</th>
        <td>
          <b-row class="row">
            <div id="text-square" class="square" />
            {{ color.text_color }}
          </b-row>
        </td>
      </tr>
      <tr>
        <th>Active</th>
        <td>{{ color.active }}</td>
      </tr>
      <tr>
        <th>Order</th>
        <td>{{ color.order }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data () {
    return {
      color: this.$store.state.color.colors.data.entities[this.$route.params.id]
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
    background: ;
  }
</style>
