<template>
  <div>
    <div v-if="$auth.loggedIn">
      <h2>You're logged in...</h2>
    </div>
    <div v-else>
      <h2>Please make login</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {

    }
  }
}
</script>
