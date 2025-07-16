<template>
  <div class="user-login-form-container">
    <div class="user-login-form">

      <div class="user-login-form-title">
        密码登录
      </div>

      <div class="user-login-form-item">
        <div class="user-login-form-item-title">
          账号
        </div>
        <input placeholder="请输入账号" type="text">
      </div>

      <div class="user-login-form-item">
        <div class="user-login-form-item-title">
          密码
        </div>
        <input placeholder="请输入密码" type="text">
        <div class="forgetPwd">
          忘记密码
        </div>
      </div>

      <div class="user-login-form-footer">
        <el-button type="primary" class="user-login-form-footer-btn">注册</el-button>
        <el-button type="primary" class="user-login-form-footer-btn">登录</el-button>
        
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  props: {
   
  }
}
</script>

<style scoped lang="less">
.user-login-form-container {
  margin-top: 10%;
  margin-left: 20%;
  margin-right: 20%;
  background-color: #ececec;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;

  .user-login-form {
    padding: 40px;
    display: flex;
    flex-direction: column;

    .user-login-form-title {
      font-size: 14px;
      text-align: center;
      margin-bottom: 40px;
      font-weight: bold;
    }

    .user-login-form-item {
      display: flex;
      font-size: 20px;
      margin-bottom: 20px;
      align-items: center;
      border: darkgray solid 1px;
      background-color: white;
      border-radius: 5px;
      padding: 6px;

      .user-login-form-item-title{
        margin-right: 10px;
        margin-bottom: 5px;
      }

      input {
        font-size: 18px;
        margin-right: 10px;
        border: none;
        outline: none;
      }

      .forgetPwd {
        font-size: 16px;
        color: dodgerblue;
        font-weight: bold;
        cursor: pointer;
      }
    }

    .user-login-form-footer {
      display: flex;
      justify-content: space-between;

      .user-login-form-footer-btn {
        width: 100%;
      }
    }
  }
}
</style>
