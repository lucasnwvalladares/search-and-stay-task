<template>
  <main>
    <b-navbar>
      <b-navbar-brand href="#">
        Search & Stay
      </b-navbar-brand>
      <b-navbar-nav>
        <div v-if="$auth.loggedIn">
          <b-nav-item to="../color">
            Color Patterns
          </b-nav-item>
        </div>
        <div v-if="$auth.loggedIn">
          <b-nav-item to="../color/new">
            New Pattern
          </b-nav-item>
        </div>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <div v-if="$auth.loggedIn">
          <b-button @click="logout">
            Logout
          </b-button>
        </div>
        <div v-else>
          <LoginBtn />
        </div>
      </b-navbar-nav>
    </b-navbar>

    <b-container>
      <Nuxt />
    </b-container>
  </main>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false
    }
  },

  methods: {
    logout () {
      this.$auth.logout()
    }
  }
}
</script>
