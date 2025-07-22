<template>
  <div class="main-page">

    <!--    分区导航-->
    <div class="main-page-channel-container">

      <div class="left-channel">
        <div class="left-channel-recommend">
          <img :src="recommendThumbnail" alt="">
          <span>推荐</span>
        </div>
        <div class="left-channel-recommend">
          <img :src="recommendThumbnail" alt="">
          <span>热门</span>
        </div>
      </div>

      <div class="right-channel">
        <div class="right-channel-left">
          <a class="right-channel-left-link" v-for="(channel,index) in leftChannels"
            :key="index" :href="channel.href" target="_blank">
            {{channel.name}}
          </a>
        </div>
        <div class="right-channel-right">
          <a class="right-channel-right-link" v-for="(channel,index) in rightChannels"
             :key="index" :href="channel.href" target="_blank">
            {{channel.name}}
          </a>
        </div>
      </div>

    </div>


    <el-carousel :interval="3000" arrow="always">
      <el-carousel-item v-for="(carouselItem, carIndex) in items" :key="carIndex">
        <img :src="carouselItem.imgUrl" alt="">
      </el-carousel-item>
    </el-carousel>

    <!-- <el-menu :default-active="'1'" class="el-menu-demo" mode="horizontal" >
      <el-menu-item 
        v-for="(menuItem, menIndex) in menus" :key="menIndex" :index="menuItem.index"
        @click="menuItemClick(menuItem)"
      >{{menuItem.name}}</el-menu-item>
    </el-menu>
    <router-view></router-view> -->
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
        recommendThumbnail: require('@/assets/bilibiliavatar.png'),
        leftChannels: [
          {
            name: '番剧',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '国创',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '综艺',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '动画',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '鬼畜',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '舞蹈',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '娱乐',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '科技',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '美食',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '汽车',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '运动',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '电影',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '电视剧',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '纪录片',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '游戏',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '音乐',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '影视',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '知识',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '资讯',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '生活',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '时尚',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '更多',
            href: 'https://www.bilibili.com/anime/'
          }
        ],
        rightChannels: [
          {
            name: '专栏',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '活动',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '课堂',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '直播',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '社区中心',
            href: 'https://www.bilibili.com/anime/'
          },
          {
            name: '新歌热榜',
            href: 'https://www.bilibili.com/anime/'
          }
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
.main-page {

  .main-page-channel-container {
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: space-between;
    margin-left: 5%;
    margin-right: 5%;

    .left-channel {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-right: 20px;

      .left-channel-recommend {
        display: flex;
        align-items: center;
        flex-direction: column;

        img {
          height:40px;
          width: 40px;
          border-radius: 50%;
        }
      }

    }

    .right-channel {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .right-channel-left {
        display: grid;
        grid-gap: 10px;
        grid-template-rows: repeat(2, 1fr);
        grid-auto-flow: column;
        border-right: 1px solid gray;
        padding-right: 30px;
        width: 100%;

        .right-channel-left-link {
          height: 26px;
          text-align: center;
          background-color: #f5f7f8;
          color: black;
          border-radius: 5px;
          width: 100%;
          cursor: pointer;
          text-decoration: none;
        }

      }

      .right-channel-right{
        width: 240px;
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: repeat(2, 1fr);
        padding-left: 20px;

        .right-channel-right-link{
          color: black;
          text-decoration: none;
        }
      }

    }

  }
}
</style>