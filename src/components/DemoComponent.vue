<template>
  <div class="hello-container">
    <div class="hellow-text">Demo</div>
  </div>
</template>

<script>
export default {
  name: 'DemoComponent',
  props: {
   
  },
}
</script>

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
