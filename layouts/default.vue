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
    padding: 0px;
    text-align: center;
  }

  .button, .button:visited
  {
    display: inline-block;
    color: #ffd3d3;
    letter-spacing: 1px;
    background-color: #b30047;
    border: 1px solid DarkRed;
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5em 1em;
  }

  .button:hover, .button:focus
  {
    color: #ffd3d3;
    background-color: #B82C30;
  }

  .logobutton, .logobutton:visited
  {
    display: inline-block;
    color: #b30047;
    letter-spacing: 1px;
    background-color: transparent;
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0px;
  }
  .logobutton:hover, .logobutton:focus
  {
    color: #f5d5b5;
    background-color: #4d004d;
  }

  .title
  {
    color: #ffd3d3;
    font-weight: 300;
    font-size: 2.5em;
    margin: 0;
  }
</style>
