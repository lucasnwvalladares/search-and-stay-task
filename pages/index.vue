<template>
  <div>ok</div>
</template>

<script>
import ENV from '@/env'

export default {
  name: 'IndexPage',
  data () {
    return {

    }
  },

  created () {
    const body = {
      login: {
        email: ENV.apiLogin.email,
        password: ENV.apiLogin.password
      }
    }
    this.$axios.$post('https://sys-dev.searchandstay.com/api/admin/login_json', body)
      .then((response) => {
        console.log(response)
      })
  }
}
</script>
