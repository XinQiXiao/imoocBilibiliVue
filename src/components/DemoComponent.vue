<template>
  <div class="hello-container">
    <div class="hellow-text">Demo</div>
  </div>
</template>

<script>

import userApi from '@/api/userApi'; 

export default {
  name: 'DemoComponent',
  props: {
   
  },
  data(){
    return {}
  },
  mounted(){
    this.testApi();
  },
  methods: {
    async testApi(){
      try {
        const body = {
          phone: '15312340002',
          password: 'd+hQHDt1CluF7QIUzVA6Ecl6upkSAK8KuIWpF25hUGfKMClpAVQrmDIj0paPF8GnbrREwQ8V7ku3itDYMzyrDARjcOuQSAkWLLQH3nf91x1qsgH4wVaNfKk8cHelT1rtXi+XeJmnWgqmKG/oY9dxeKYggqlMq7CAYnG3RQLH59Q=',
        }
        const ret = await userApi.getUserToken(body);
        console.log('testApi ret=>', ret);
      } catch(error){
        console.log('testApi error=>', error);
      }
    }
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
