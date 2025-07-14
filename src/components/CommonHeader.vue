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

          <el-popover 
            placement="top-start" 
            width="200" 
            trigger="hover"
          >
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

      </div>

      <div class="header-banner-container">

      </div>
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
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>