<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="content col-sm-12">
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
        <template #cell(actions)="row">
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
      fields: ['id', 'bg_color', 'text_color', 'active', 'order', 'actions'] // table heading for columns
    }
  },

  // fetch calling the store to get patterns list
  async fetch ({ store }) {
    await store.dispatch('patterns/get')
  },

  computed: {
    // return a list of patterns
    patterns () {
      return this.$store.state.patterns.patternsList
    }
  },

  methods: {
    // handles click on table row to show the pattern in a new page
    handleClick (record) {
      // makes the dispath to get the item before render next page
      this.$store.dispatch('patterns/show', record.id)
        .then((res) => {
          // pushes to page with the pattern id
          this.$router.push({ path: '/color/' + record.id })
        })
    },

    // deletes pattern
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
    justify-content: center;
  }
</style>
