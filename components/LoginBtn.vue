<template>
  <div>
    <b-button @click="login">
      Login
    </b-button>
  </div>
</template>
<script>
import ENV from '@/env'

export default {
  methods: {
    login () {
      const credentials = {
        login: {
          email: ENV.apiLogin.email,
          password: ENV.apiLogin.password
        }
      }
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
