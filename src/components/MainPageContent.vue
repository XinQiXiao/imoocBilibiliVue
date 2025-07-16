<template>
  <div class="main-content-container">
    <el-carousel :interval="3000" arrow="always">
      <el-carousel-item v-for="(carouselItem, carIndex) in items" :key="carIndex">
        <img :src="carouselItem.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>

    <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" >
      <el-menu-item 
        v-for="(menuItem, menIndex) in menus" :key="menIndex" :index="menuItem.index"
        @click="menuItemClick(menuItem)"
      >{{menuItem.name}}</el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'MainPageContent',
    props: {

    },
    data(){
      return {
        items: [
          {
            id: 1,
            imgUrl: require('@/assets/header/header-banner.png'),
          },
          {
            id: 2,
            imgUrl: require('@/assets/header/header-banner.png'),
          },
          {
            id: 3,
            imgUrl: require('@/assets/header/header-banner.png'),
          },
        ],
        menus: [
          {
            name: '主页',
            path: 'home',
            index: '1',
          },
          {
            name: '投稿',
            path: 'post',
            index: '2',
          },
        ],
      }
    },
    methods: {
      menuItemClick(itemInfo){
        this.$router.push(itemInfo.path);
      }
    },
  }
</script>

<style scoped lang="less">
  .main-content-container {
    width: 100%;
  }
</style>