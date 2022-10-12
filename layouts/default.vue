<template>
  <main>
    <b-navbar>
      <b-navbar-brand href="#">Search & Stay</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <div v-if="$auth.loggedIn">
          <b-button @click="logout">Logout</b-button>
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
