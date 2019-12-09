<template>
  <div id="app">
    <Button label="hello vuejs frankfurt 👋" />
  </div>
</template>

<script>
  import Button from './components/button/Button.vue';

  export default {
    name: 'app',
    components: {
      Button
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
