<template>
  <div class="bili-header">
    <div class="header-nav-container">

      <div class="left-entry">
        <div v-for="entry in entries" :key="entry.id">
          <span @click="jumpToPath(entry.path)">{{entry.name}}</span>
        </div>
      </div>

      <div class="center-search-bar">
        <form class="nav-search-form">
          <div class="nav-search-content">
            <input class="nav-search-input"
              type="text" autocomplete="off"
              maxlength="100" placeholder="请输入要搜索的内容"
              v-model="searchTxt"
            >
          </div>
          <div class="nav-search-btn">
            <el-button icon="el-icon-search"
              circle size="mini" @click="searchContents"
            ></el-button>
          </div>
        </form>

      </div>

      <div class="right-entry">

        <div v-if="isUserLoggedIn" class="user-center">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img 
                style="height: 50px; width: 50px; border-radius: 50%"
                :src="avatar" alt=""
              >
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <el-button type="text" style="color: black" @click="jumpToPath('/mySpace')">
                  个人中心
                </el-button>
              </el-dropdown-item>
              <el-dropdown-item style="color: black">
                <el-button type="text" style="color: black" @click="logout">
                  退出登录
                </el-button>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div v-else class="user-center">
          <el-button class="login-button" type="text" @click="dialogVisible=true">
            登录
          </el-button>
          <el-dialog title="密码登录" :visible.sync="dialogVisible" width="30%">
            <LoginDialog></LoginDialog>
          </el-dialog>
        </div>

        <div class="right-entry-moments">

          <el-popover placement="top-start" width="200" trigger="hover">
            <div v-if="isUserLoggedIn">
              <div>
                这是动态内容
              </div>
              <el-button type="info">
                查看更多
              </el-button>
            </div>
            <div v-else>
              <div>
                登录即可查看动态
              </div>
              <el-button type="info">
                立即登录
              </el-button>
            </div>
            <el-button slot="reference" class="el-btn-moments">hover 激活</el-button>
          </el-popover>

        </div>

        <div class="right-entry-content">
          <el-button 
            type="warning" icon="el-icon-upload2" circle
            
          ></el-button>
          <span>历史</span>
        </div>
        <div class="right-entry-content">
          <el-button 
            type="warning" icon="el-icon-upload2" circle
            @click="jumpWithLoginUser('/postContent')"
          ></el-button>
          <span>投稿</span>
        </div>

      </div>

    </div>

    <div class="header-banner-container">
      <img class="banner" :src="require('@/assets/header/header-banner.png')" alt="">
    </div>

  </div>
</template>

<script>
  import userUtils from "@/utils/userUtils";
  import LoginDialog from "@/components/LoginDialog.vue";

  export default {
    name: 'CommonHeader',
    props: {

    },
    components: { LoginDialog, },
    data() {
      return {
        dialogVisible: false,
        entries: [
          {
            id: 1,
            name: '首页',
            path: '/home'
          },
          {
            id: 2,
            name: '番剧',
            path: '/home'
          },
          {
            id: 3,
            name: '直播',
            path: '/home'
          },
          {
            id: 4,
            name: '游戏中心',
            path: '/home'
          }
        ],
        searchTxt: '',
      }
    },
    mixins: [userUtils,],
    computed: {
      avatar() {
        const userInfo = this.$store.state.userInfo;
        if (userInfo && userInfo.avatar && userInfo.avatar !== '') {
          return userInfo.avatar;
        } else {
          return require('@/assets/bilibiliavatar.png');
        }
      }
    },
    async mounted(){
      if (this.isUserLoggedIn) {
        this.$store.state.userInfo = await this.getUserBasicInfo();

        // let params = {
        //   size: 5,
        //   no: 1
        // }
        // //查询动态
        // let response = await userMomentApi.pageListMoments(params);
        // if (response.data) {
        //   this.moments = response.data.list;
        // }
        // //查询历史
        // let response1 = await userHistoryApi.pagListUserVideoHistory(params);
        // if (response1.data) {
        //   this.histories = response1.data.list;
        // }
      }
    },
    methods: {
      jumpWithLoginUser(path) {
        //先判断用户是否登录，如果没有登录，弹出用户登录对话框
        if (!this.isUserLoggedIn) {
          this.dialogVisible = true;
        } else {
          //打开一个新的页面地址
          //如果当前页面的路径等于我们要跳转的路径，则只需要刷新页面
          if (this.$route.path !== path) {
            this.$router.push(path);
          } else {
            location.reload();
          }
        }
      },
      jumpToPath(path){
        if(this.$route.path !== path){
          this.$router.push(path);
        }else{
          location.reload();
        }
      },
      searchContents(){},
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bili-header {

  .header-nav-container {
    position: absolute;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-entry{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 40px;

      span{
        margin-right: 20px;
        color: white;
        font-weight: bolder;
        cursor: pointer;
      }
    }

    .center-search-bar{
      flex: 1 auto;
      min-width: 181px;
      max-width: 500px;

      .nav-search-form{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 4px 0 4px;
        height: 40px;
        background-color: white;
        border-radius: 8px;
        opacity: 0.8;

        .nav-search-content{
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 36px;
          border: 2px solid transparent;
          border-radius: 6px;

          .nav-search-input{
            width: 100%;
            font-size: 14px;
            padding-right: 8px;
            background-color: transparent;
            border: none;
            box-shadow: none;
            outline: none;
          }
        }

        .nav-search-btn{
          margin: 0;
          padding: 0;
          width: 32px;
          height: 32px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

      }

    }

    .right-entry {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 10px;

      .user-center {
        margin-right: 10px;

        .login-button {
          color: #00a1d6;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          font-weight: bold;
          background-color: #fff;
        }
      }

      .right-entry-moments {
        margin-right: 10px;

        .el-btn-moments {
          height: 100%;
        }
      }

      .right-entry-content {
        margin-right: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
          margin-top: 5px;
          color: #fff;
        }
      }
    }
  }

  .header-banner-container {
    .banner {
      width: 100%;
    }
  }
}
</style>