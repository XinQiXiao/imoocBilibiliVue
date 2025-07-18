<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style lang="less">
#app {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  position: relative;
}

html, body {
  margin: 0;
}
</style>
