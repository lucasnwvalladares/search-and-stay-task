export const state = () => ({
  patternsList: [],
  singlePattern: {}
})

export const actions = {
  async get ({ commit }) {
    return await this.$axios.$get('calendar_patterns')
      .then((res) => {
        commit('SET', res.data.entities)
        return res.data.entities
      })
  },
  async set ({ commit }, pattterns) {
    await commit('SET', pattterns)
  }
}

export const mutations = {
  SET (state, pattern) {
    state.patternsList = pattern
  }
}

export const getters = {
  getPatterns: (state) => {
    return state.patternsList
  }
}
