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
  async show ({ commit }, params) {
    try {
      console.log('ENTERS TRY', params)
      return await this.$axios.$get(`calendar_patterns/${params}`)
        .then((res) => {
          console.log('enters here')
          commit('SET_PATTERN', res.data)
          return res.data
        })
    } catch (error) {
      return error
    }
  },
  async set ({ commit }, pattterns) {
    await commit('SET', pattterns)
  },
  async delete ({ commit }, params) {
    try {
      return await this.$axios.$delete(`calendar_patterns/${params.id}`)
        .then((res) => { return res })
    } catch (error) {
      return error
    }
  },
  async create ({ commit }, data) {
    try {
      return await this.$axios.$post('calendar_patterns', { calendar_patterns: data })
        .then((res) => { return res })
        .catch((error) => { return error.response })
    } catch (error) {
      return error
    }
  }
}

export const mutations = {
  SET (state, pattern) {
    state.patternsList = pattern
  },
  SET_PATTERN (state, pattern) {
    state.singlePattern = pattern
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
