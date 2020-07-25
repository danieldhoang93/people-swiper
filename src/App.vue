<template>
  <div id="q-app">
    <CardStack/>
  </div>
</template>

<script>
import CardStack from 'components/CardStack.vue'
export default {
  name: 'app',
  components: { CardStack }
}
</script>

<style lang="scss">
body {
  margin: 0;
  z-index: 0;
}

#q-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>