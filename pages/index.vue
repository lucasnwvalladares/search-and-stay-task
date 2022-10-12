<template>
  <div>
    ok
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {

    }
  },

  mounted () {
    this.$store.dispatch('colors/getAllColors')
      .then(res => console.table(res.data.entities))
      .catch(err => console.err(err))
  }
}
</script>
