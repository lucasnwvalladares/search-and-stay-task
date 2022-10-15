<template>
  <div>
    <b-button variant="outline-primary" @click="login">
      Login
    </b-button>
  </div>
</template>
<script>
import ENV from '@/env'

export default {
  methods: {
    // gets credentials from .env file to make the request body
    login () {
      const credentials = {
        login: {
          email: ENV.apiLogin.email,
          password: ENV.apiLogin.password
        }
      }

      // promise to log the user with auth
      this.$auth.loginWith('local', { data: credentials })
        .then((response) => {
          if (this.$auth.loggedIn) {
            const user = response.data.result.name
            this.$auth.setUser(user)
          }
          return response
        })
        .catch((err) => { return err })
    }
  }
}
</script>
<style>

</style>
