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
        <template #cell(icon)="row">
          <a @click="deletePattern(row.item)">
            <b-icon icon="trash" />
          </a>
        </template>
      </b-table>
    </div>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
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
      this.$store.dispatch('patterns/show', record.id)
        .then((res) => {
          this.$router.push({ path: '/color/' + record.id })
        })
    },

    deletePattern (pattern) {
      this.$store.dispatch('patterns/delete', { id: pattern.id })
        .then((res) => {
          this.$store.dispatch('patterns/get')
          alert(res.message)
        })
    }
  }
}
</script>
<style scope>
  .content {
    margin-top: 2em;
  }
</style>
