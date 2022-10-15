export const state = () => ({
  patternsList: [], // A list of color pattens
  singlePattern: {} // a single color pattern
})

export const actions = {
  // method to get all calendar patterns
  async get ({ commit }) {
    return await this.$axios.$get('calendar_patterns')
      .then((res) => {
        commit('SET', res.data.entities)
        return res.data.entities
      })
  },
  // method that gets a calendar pattern to SHOW at the front
  async show ({ commit }, params) {
    try {
      return await this.$axios.$get(`calendar_patterns/${params}`)
        .then((res) => {
          commit('SET_PATTERN', res.data)
          return res.data
        })
    } catch (error) {
      return error
    }
  },
  // method to DELETE a calendar pattern
  async delete ({ commit }, params) {
    try {
      return await this.$axios.$delete(`calendar_patterns/${params.id}`)
        .then((res) => { return res })
    } catch (error) {
      return error
    }
  },
  // method to CREATE a calendar pattern
  async create ({ commit }, data) {
    try {
      return await this.$axios.$post('calendar_patterns', { calendar_patterns: data })
        .then((res) => { return res })
        .catch((error) => { return error.response })
    } catch (error) {
      return error
    }
  },
  // method to UPDATE a calendar pattern
  async update ({ commit }, { id, data }) {
    try {
      return await this.$axios.$put(`calendar_patterns/${id}`, { calendar_patterns: data })
        .then((res) => {
          commit('SET_PATTERN', res.data)
          return res
        })
        .catch((error) => { return error.response })
    } catch (error) {
      return error
    }
  }
}

export const mutations = {
  // populates the state list of patterns
  SET (state, pattern) {
    state.patternsList = pattern
  },
  // populates the state single pattern
  SET_PATTERN (state, pattern) {
    state.singlePattern = pattern
  },
  // deletes a specific pattern from the state list
  DELETE (state, { pattern }) {
    state.patternsList = state.patternsList.filter(p => pattern.id !== p.id)
  }
}

export const getters = {
  // returns the state list of patterns
  getPatterns: (state) => {
    return state.patternsList
  },
  // returns the state single pattern
  getPattern: (state) => {
    return state.singlePattern
  }
}
