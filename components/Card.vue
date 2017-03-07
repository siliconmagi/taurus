<template>
  <div class="container">
    <!-- Content from the parent gets rendered here. -->
    <slot></slot>
  </div>
</template>
<style lang="scss" scoped>
  .container
  {
    background-color: black;
    border-radius: 5px;
    margin: 0 auto;
    width: 98%;
    padding: .2em;
    box-shadow: 0px 3px 14px 3px rgba(0,0,0,0.75);
  }
  @media (min-width: 800px) {
    .container {
      width: 780px;
    }
  }
</style>

