<template>
  <div>
    <my-header/>
    <nuxt/>
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'
import MyHeader from '~components/Header.vue'

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
  text-align: center;
}

.button, .button:visited
{
  display: inline-block;
  color: #b30047;
  letter-spacing: 1px;
  background-color: #fff;
  border: 1px solid #b30047;
  border-radius: 3px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5em 1em;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #cc3399;
}

.logobutton, .logobutton:visited
{
  display: inline-block;
  color: #b30047;
  letter-spacing: 1px;
  background-color: #fff;
  border: 1px solid #b30047;
  border-radius: 3px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0px;
}
.logobutton:hover, .logobutton:focus
{
  color: #fff;
  background-color: #cc3399;
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
</style>
