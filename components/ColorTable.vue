<template>
  <div>
    {{ $store.state.colors.colors }}
  </div>
</template>
<script>
export default {
  mounted () {
    this.$store.dispatch('colors/getAllColors')
      .then(res => console.table(res.data.entities))
      .catch(err => console.err(err))
  }
}
</script>
<style scope>

</style>
