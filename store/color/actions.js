export default {
  getColor ({ commit }) {
    return this.$axios.$get('calendar_patterns').then((response) => {
      commit('STORE', response)
      return response
    })
  }
}
