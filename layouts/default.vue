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
    color: white;
    letter-spacing: 1px;
    background-color: hsla(20, 100%, 40%, 1);
    border: 1px solid hsla(0,0%,0%,.5);
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5em 1em;
  }

  .button:hover, .button:focus
  {
    color: white;
    background-color: hsla(20, 100%, 20%, 1);
  }

  .logobutton, .logobutton:visited
  {
    display: inline-block;
    letter-spacing: 1px;
    background-color: transparent;
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0px;
  }
  .logobutton:hover, .logobutton:focus
  {
  }

  .title
  {
    color: hsla(20, 100%, 70%, 1);
    font-weight: 300;
    font-size: 2.5em;
    margin: .5em 0;
  }
</style>
