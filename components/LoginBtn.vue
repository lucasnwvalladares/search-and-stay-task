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
        .then(response => console.log('Logged In!', response))
        .catch(err => console.error(err))
    }
  }
}
</script>
<style>

</style>
