<template>
  <div class="main-container">
    <CommonHeader></CommonHeader>
    <MainPageContent></MainPageContent>
  </div>
</template>

<script>

import CommonHeader from '@/components/CommonHeader';
import MainPageContent from '@/components/MainPageContent';

export default {
  name: 'MainPage',
  components: {
    CommonHeader,
    MainPageContent,
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
  box-sizing: border-box;
  flex-direction: column;
  
}
</style>
