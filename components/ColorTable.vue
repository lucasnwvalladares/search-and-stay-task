<template>
  <div class="content">
    <div v-if="$fetch.loading">
      <h3>Loading data...</h3>
    </div>
    <div v-else>
      <b-table
        striped
        borderless
        hover
        foot-clone
        head-variant="dark"
        table-variant="info"
        :fields="fields"
        :items="$store.state.color.colors.data.entities"
        @row-clicked="handleClick"
      />
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fields: ['id', 'bg_color', 'text_color', 'active', 'order']
    }
  },

  async fetch () {
    await this.$store.dispatch('color/getColor')
      .then(res => console.error(res))
      .catch(err => console.error(err))
  },

  methods: {
    handleClick (record) {
      this.$router.push({ path: '/color/' + record.id })
    }
  }
}
</script>
<style scope>
  .content {
    margin-top: 2em;
  }
</style>
