
<template>
  <div class="">
    <CommonHeader ></CommonHeader>
    
    <div class="video-detail-container">

      <div class="left-container">

        <div class="video-info-container">
          <div class="video-info-title">
            {{videoDetail.title}}
          </div>
          <div class="video-info-count">
            <span>
              <img :src="require('@/assets/icon/viewCount.png')" alt="">
              {{viewCount}}
            </span>
            <span>
              <img :src="require('@/assets/icon/danmuCount.png')" alt="">
              {{danmuCount}}
            </span>
            <span>
              {{videoDetail.createTime}}
            </span>
            <span>
              <img :src="require('@/assets/icon/jinzhi.png')" alt="">
              未经作者授权，禁止转载
            </span>
          </div>
        </div>

        <!--播放器页面站位DOM-->
        <div id="bili-player"></div>

      </div>

      <div class="right-container">

      </div>

    </div>
  </div>
</template>

<script>
  import CommonHeader from "@/components/CommonHeader.vue";
  import videoApi from "@/api/videoApi";
  import Player, {Danmu} from 'xgplayer';
  import 'xgplayer/dist/index.min.css';
  import 'xgplayer/es/plugins/danmu/index.css'
  import {Events} from "xgplayer";
  import userUtils from "@/utils/userUtils";

  export default {
    name: "VideoDetail4",
    components: {CommonHeader},
    mixins:[userUtils],
    data(){
      return {
        videoDetail: {
          title: 'title',
          createTime: ''
        },
        viewCount: '',
        danmuCount: 0,
        videoUpInfo: {},
        player: null,
        onWatching: 0,
        danmuText: '',
        liked: false,
        likeCount: 0,
        hasCoin: false,
        coinCount: 0,
        collected: false,
        collectCount: 0,
        followed: false,
        showLoginDialog: false,
        defaultDanmuConfig: {
          duration: 5000, //弹幕持续显示时间，单位是毫秒（最低为5000毫秒）
          style: {
            color: '#ffffff',
            padding: '5px 11px'
          }
        },
        ws: null,
        activeNames: ['1'],
        tableData: [],
        danmus: []
      }
    },
    mounted(){
      this.getVideoDetail();
    },
    methods: {
      async getVideoDetail() {
        const videoId = this.$route.query.videoId;
        if (videoId) {
          const response = await videoApi.getVideoDetail(videoId);
          this.videoDetail = response.data.video;
          this.videoUpInfo = response.data.userInfo;
          await this.initPlayer();
          
        }
        
      },

      async initPlayer(){
        const videoUrl = '/localApi/video-slices?url=' + this.videoDetail.url;
        
        this.player = new Player({
          id: 'bili-player',
          url: videoUrl,
          width: '800px',
          height: '450px',
          plugins: [Danmu],
          danmu: {
            comments: []
          },
        });
       
        this.player.on(Events.ENDED, async () => {
          let params = {
            videoId: this.$route.query.videoId
          }
          await videoApi.addVideoViews(params);
          this.viewCount++;
        })
      },

    },
  }
</script>

<style scoped lang="less">
.video-detail-container{
  display: flex;
  justify-content: center;

  .left-container{
    display: flex;
    flex-direction: column;

    .video-info-container{
      display: flex;
      height: 108px;
      flex-direction: column;
      justify-content: center;

      .video-info-title{
        font-size: 24px;
        margin-bottom: 5px;
      }
      .video-info-count{
        font-size: 13px;
        align-items: center;
        color: gray;
        display: flex;
        span{
          display: flex;
          align-items: center;
          margin-right: 20px;
          img{
            height: 25px;
            width: 25px;
            border-radius: 2px;
            margin-right: 5px;
          }
        }

      }
    }

    .danmu-bar{
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #d5d2d2;
      border-radius: 2px;

      .danmu-bar-video-info{
        width: 100%;
      }

      .danmu-bar-operation{
        display: flex;
        height: 40px;
        width: 100%;
        border-radius: 8px;
        background: #f4f4f4;

        .danmu-bar-sender{
          display: flex;
          width: 100%;
          align-items: center;
          border: none;
          border-radius: 8px 0 0 8px;
          height: 100%;

          .danmu-bar-sender-input{
            outline: none;
            background: none;
            border: 0;
            color: #212121;
            height: 28px;
            line-height: 28px;
            min-width: 100px;
            padding: 0 5px;
            width: 100%;
          }

        }

      }

    }

    .video-tools-bar{
      margin-top: 10px;
      display: flex;
      border-bottom: 1px solid #d5d2d2;
      .video-tools-bar-left{
        width: 100%;
        display: flex;
        margin-bottom: 10px;
        .like-coin-collect{
          display: flex;
          align-items: center;
          margin-right: 40px;
          img{
            height:36px;
            width: 36px;
            margin-right: 10px;
            cursor: pointer;
          }

        }
      }
    }

    .left-container-under-player{

      .video-detail-description{
        max-width: 800px;
        margin: 18px 0;
      }

    }
  }

  .right-container{
    margin-left: 30px;
    display: flex;
    flex-direction: column;

    .up-info-container{
      display: flex;
      align-items: center;
      height: 108px;
      .up-avatar{
        img{
          width: 60px;
          height: 60px;
          border-radius: 5px;
        }
      }
      .up-info-right{
        padding: 20px;
        .up-info-detail{
          color: #FB7299;
        }
      }
    }

    .danmu-box{
      width: 500px;
    }
  }


}
</style>