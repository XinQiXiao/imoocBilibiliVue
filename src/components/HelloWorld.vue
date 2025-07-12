<template>
  <div class="hello-container">
    <div class="hellow-text">Hello World</div>
    <el-button type="primary">button</el-button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .hellow-text {
    color: red;
  }
}
</style>
