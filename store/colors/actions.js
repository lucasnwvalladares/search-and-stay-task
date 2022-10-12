export default {
  getAllColors (context) {
    return this.$axios.$get('https://sys-dev.searchandstay.com/api/admin/calendar_patterns')
      .then(response => context.commit('STORE', response))
  }
}
