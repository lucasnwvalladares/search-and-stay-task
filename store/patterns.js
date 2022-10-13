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
  },
  async delete ({ commit }, params) {
    try {
      return await this.$axios.$delete(`calendar_patterns/9${params.id}`)
        .then((res) => { return res })
    } catch (error) {
      return error
    }
  },
  async create ({ commit }, params) {
    return await this.$axios.$post('calendar_patterns', { body: params })
      .then((res) => { return res })
      .then((error) => { return error })
  }
}

export const mutations = {
  SET (state, pattern) {
    state.patternsList = pattern
  },
  DELETE (state, { pattern }) {
    state.patternsList = state.patternsList.filter(p => pattern.id !== p.id)
  }
}

export const getters = {
  getPatterns: (state) => {
    return state.patternsList
  }
}
