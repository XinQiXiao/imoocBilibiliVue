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


    <div class="main-page-video-container">

      <div class="carousel-container">
        <el-carousel :interval="5000" arrow="always" class="carousel">
          <el-carousel-item v-for="(video, index) in recommendedVideos" :key="index">
            <img :src="video.thumbnail"
                 :alt="video.id" style="width: 100%; height: 100%; border-radius: 5px"
                  @click="jumpToVideoDetail(video)">
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="video-container" v-for="video in videos" :key="video.id"
          @click="jumpToVideoDetail(video)">
        <img :src="video.thumbnail" class="thumbnail" alt="">
        <span>{{video.title}}</span>
        <div class="videos-details">
          <div class="video-count-item">
            <img :src="require('@/assets/icon/viewCount.png')" alt="">
            {{video.viewCount ? video.viewCount : '-'}}
          </div>
          <div class="danmu-count-item">
            <img :src="require('@/assets/icon/danmuCount.png')" alt="">
            {{video.danmuCount ? video.danmuCount : '-'}}
          </div>
          <div class="videos-time">
            {{video.createTime}}
          </div>
        </div>

      </div>
      <infinite-loading 
        :infinite-id="infiniteId"
        @infinite="pageListVideos">
      </infinite-loading>

    </div>

  </div>
</template>

<script>
  import videoApi from "@/api/videoApi";


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
        recommendedVideos: [
          {
            id:1,
            thumbnail:require('@/assets/banner/1.jpg')
          },
          {
            id:2,
            thumbnail:require('@/assets/banner/2.jpg')
          },
          {
            id:3,
            thumbnail:require('@/assets/banner/3.jpg')
          }
        ],
        videos: [
          {
            id:1,
            title:'title1',
            thumbnail:require('@/assets/banner/1.jpg'),
            createTime: '2023-12-16 10:30:42',
            danmuCount:20,
            viewCount:10
          },
          {
            id:2,
            title:'title2',
            thumbnail:require('@/assets/banner/2.jpg'),
            createTime: '2023-12-17 10:30:42',
            danmuCount:30,
            viewCount:20
          },
          {
            id:3,
            title:'title3',
            thumbnail:require('@/assets/banner/3.jpg'),
            createTime: '2023-12-18 10:30:42',
            danmuCount:10,
            viewCount:40
          },
          {
            id:4,
            title:'title4',
            thumbnail:require('@/assets/banner/1.jpg'),
            createTime: '2023-12-16 10:30:42',
            danmuCount:20,
            viewCount:10
          },
          {
            id:5,
            title:'title5',
            thumbnail:require('@/assets/banner/2.jpg'),
            createTime: '2023-12-17 10:30:42',
            danmuCount:30,
            viewCount:20
          },
          {
            id:6,
            title:'title6',
            thumbnail:require('@/assets/banner/3.jpg'),
            createTime: '2023-12-18 10:30:42',
            danmuCount:10,
            viewCount:40
          },
           {
            id:7,
            title:'title7',
            thumbnail:require('@/assets/banner/1.jpg'),
            createTime: '2023-12-16 10:30:42',
            danmuCount:20,
            viewCount:10
          },
          {
            id:8,
            title:'title8',
            thumbnail:require('@/assets/banner/2.jpg'),
            createTime: '2023-12-17 10:30:42',
            danmuCount:30,
            viewCount:20
          },
          {
            id:9,
            title:'title9',
            thumbnail:require('@/assets/banner/3.jpg'),
            createTime: '2023-12-18 10:30:42',
            danmuCount:10,
            viewCount:40
          },
          {
            id:10,
            title:'title10',
            thumbnail:require('@/assets/banner/1.jpg'),
            createTime: '2023-12-16 10:30:42',
            danmuCount:20,
            viewCount:10
          },
          {
            id:11,
            title:'title11',
            thumbnail:require('@/assets/banner/2.jpg'),
            createTime: '2023-12-17 10:30:42',
            danmuCount:30,
            viewCount:20
          },
          {
            id:12,
            title:'title12',
            thumbnail:require('@/assets/banner/3.jpg'),
            createTime: '2023-12-18 10:30:42',
            danmuCount:10,
            viewCount:40
          }
        ],
        infiniteId: 1,
        currentPage: 1
      }
    },
    methods: {
      menuItemClick(itemInfo){
        this.$router.push(itemInfo.path);
      },
      jumpToVideoDetail(video) {
        
      },

      pageListVideos($state) {
        let params = {
          size: 10,
          no: this.currentPage
        }
        videoApi.pageListVideos({ params }).then(response => {
          const { list: videos, total: total } = response.data;
          if (videos.length === 0) {
            // 已加载所有数据，不再触发加载
            $state.complete();
            return;
          }
          this.videos = this.videos.concat(videos);
          this.total = total;
          this.currentPage++; // 递增当前页码
          $state.loaded(); // 标记加载完成
        }).catch(error => {
          // 捕获异常
          console.error('请求出错:', error);
          $state.complete();
        });
      },
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

  .main-page-video-container{
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(5, 1fr);
    height: 100%;
    flex-shrink: 0;
    margin-right: 5%;
    margin-left: 5%;
    margin-top: 40px;

    .carousel-container{
      grid-column: 1/3;
      grid-row: 1/3;
      cursor: pointer;

      .carousel{
        height: 100%;
        max-height: 480px;

        ::v-deep .el-carousel__container{
          height: 100%;
          min-height: 400px;
        }
      }

    }

    .video-container{
      display: flex;
      flex-direction: column;
      font-size: 16px;
      height: 100%;
      cursor: pointer;
      justify-content: space-between;

      .thumbnail{
        width: 100%;
        max-width: 320px;
        height: 180px;
        border-radius: 5px;
      }

      .videos-details{
        display: flex;
        align-items: center;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;

        .video-count-item{
          display: flex;
          align-items: center;
          margin-right: 10px;

          img{
            max-height: 26px;
            max-width: 26px;
            margin-right: 5px;
          }
        }

        .danmu-count-item{
          display: flex;
          align-items: center;
          margin-right: 10px;

          img{
            max-height: 26px;
            max-width: 26px;
            margin-right: 5px;
          }
        }
        .videos-time{
          color: gray;
          font-size: 16px;
        }
      }
    }

    @media (max-width: 1680px){
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 768px){
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>