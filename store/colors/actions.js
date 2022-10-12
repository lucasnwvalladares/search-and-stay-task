export default {
  getAllColors () {
    return this.$axios.$get('https://sys-dev.searchandstay.com/api/admin/calendar_patterns')
  }
}
