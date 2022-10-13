<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content">
    <div>
      <b-table
        striped
        borderless
        hover
        foot-clone
        head-variant="dark"
        table-variant="info"
        :fields="fields"
        :items="patterns"
        @row-clicked="handleClick"
      >
        <template #cell(icon)="">
          <a @click="deleteColor">
            <b-icon icon="trash" />
          </a>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      fields: ['id', 'bg_color', 'text_color', 'active', 'order', 'icon']
    }
  },

  async fetch ({ store }) {
    await store.dispatch('patterns/get')
  },

  computed: {
    patterns () {
      return this.$store.state.patterns.patternsList
    }
  },

  methods: {
    handleClick (record) {
      this.$router.push({ path: '/color/' + record.id })
    },

    deleteColor (record) {
      console.log('TRAHS DELETE', record)
    }
  }
}
</script>
<style scope>
  .content {
    margin-top: 2em;
  }
</style>
