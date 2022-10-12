<template>
  <v-app dark>
    <b-navbar>
      <b-navbar-brand href="#">Search & Stay</b-navbar-brand>

      <b-navbar-nav class="ml-auto">
        <div v-if="$auth.loggedIn">
          {{ $auth.user.email }}
          <b-button>Logout</b-button>
        </div>
        <div v-else>
          <b-button to="/login">Login</b-button>
        </div>
      </b-navbar-nav>
    </b-navbar>

    <b-container>
      <Nuxt />
    </b-container>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      fixed: false
    }
  }
}
</script>
