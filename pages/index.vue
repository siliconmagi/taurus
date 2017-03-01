<template>
  <section class="container">
    <h1 class="title">
      Nightshell.com
    </h1>
    <form v-on:submit.prevent="onSubmit">
      <input v-model="email" placeholder="Email">
      <input v-model="password" placeholder="Password">
      <p>Email is: {{ email }}</p>
      <p>Password is: {{ password }}</p>
    </form>
  </section>
</template>
<style scoped>
.title
{
  margin: 50px 0;
}
</style>
<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    }
  }
  </script>
