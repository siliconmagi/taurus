<template>
  <section class="container">
    <h1 class="title">
      Nightshell
    </h1>
    <SignUp></SignUp>
  </section>
</template>
<style scoped>
  .title
  {
    margin: .5em 0;
  }
</style>
<script>
import SignUp from '~components/SignUp.vue'

export default {
  components: {
    SignUp
  }
}
</script>
