<template>
  <div>
    <div v-if="$auth.loggedIn">
      <b-button to="color">colors</b-button>
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
