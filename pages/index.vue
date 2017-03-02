<template>
  <section class="container">
    <h1 class="title">
      Nightshell.com
    </h1>
    <!-- <form v-on:submit.prevent="onSubmit"> -->
      <button @click="$store.commit('increment')">{{ $store.state.counter }}</button>
      <input v-model="email" placeholder="Email">
      </br>
      <input v-model="password" placeholder="Password">
      <p>Email is: {{ email }}</p>
      <p>Password is: {{ password }}</p>
      <!-- <input v-on:submit="submit" value="Sign up"> -->
    <!-- </form> -->
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
