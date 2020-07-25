<template>
  <div id="q-app">
    <div class="fixed header">
        <span>Please Love Me</span>
      </div>
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
.header {
  width: 100%;
  height: 60vh;
  z-index: 0;
  color: white;
  background: #f953c6;
  background: -webkit-linear-gradient(to top, #f03e91, #f568aa);
  background: linear-gradient(to top, #f84e9d, #f03e91);
  display: flex;
  justify-content: center;
  clip-path: polygon(0 0%, 100% 0%, 100% 76%, 0 89%);
  span {
    display: block;
    font-size: 4rem;
    padding-top: 2rem;
    text-shadow: 1px 1px 1px red;
  }
  i {
    padding: 24px;
  }
}

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