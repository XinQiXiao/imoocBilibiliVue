<template>
  <div class="main-container">
    <CommonHeader></CommonHeader>
  </div>
</template>

<script>

import CommonHeader from '@/components/CommonHeader';

export default {
  name: 'MainPage',
  components: {
    CommonHeader
  },
  props: {
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main-container {
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
