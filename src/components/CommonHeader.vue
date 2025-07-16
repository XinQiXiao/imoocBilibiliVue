<template>
  <div class="bili-header">
    <div class="header-nav-container">

      <div class="right-entry">

        <div v-if="isUserLoggedIn" class="user-center">
          <el-dropdown>
            <span class="el-dropdown-link">
              <img :src="require('@/assets/bilibiliavatar.png')" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div v-else class="user-center">
          <el-button class="login-button" type="text" @click="dialogVisible=true">
            登录
          </el-button>
          <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
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
            <el-button slot="reference">hover 激活</el-button>
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
            @click="jumpWithLoginUser('/userLogin')"
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
  export default {
    name: 'CommonHeader',
    props: {

    },
    data() {
      return {
        dialogVisible: false,
      }
    },
    computed: {
      isUserLoggedIn() {
        return localStorage.getItem('token');
      }
    },
    mounted(){
      localStorage.setItem('token', '123')
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
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bili-header {

  .header-nav-container {
    position: absolute;
    width: 100%;
  }

  .header-banner-container {
    .banner {
      width: 100%;
    }
  }
}
</style>