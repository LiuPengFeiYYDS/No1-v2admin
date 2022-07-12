<template>
  <div class="login">
    <h1>智慧平台</h1>
    <div class="login-form">
      <h2>欢迎登陆</h2>
      <el-form ref="form" :rules="rules" :model="loginForm">
        <el-form-item prop="username">
          <el-input
            v-model.trim="loginForm.username"
            placeholder="请输入账号"
            suffix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            clearable
            v-model.trim="loginForm.password"
            show-password
            placeholder="请输入密码"
            suffix-icon="el-icon-s-goods"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class="verify">
            <el-input
              v-model.trim="loginForm.code"
              placeholder="请输入验证码"
            ></el-input>
            <el-image @click="verification" :src="codeImageUrl" />
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-button"
            :loading="loadingStatus"
            type="danger"
            @click="add"
            >{{ loadingStatus ? '登录中...' : '立即登录' }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import UserApi from '../../api/user.js'
import rules from './rules'
import { mapActions } from 'vuex'
export default {
  name: 'index',
  data() {
    return {
      // 验证码路径
      codeImageUrl: '',
      // 登录参数
      loginForm: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      // 设置效验
      rules,
      // 设置loading
      loadingStatus: false
    }
  },
  methods: {
    /**
     * 调用接口获取验证码
     */
    async handleGetCaptcha() {
      const res = await UserApi.getCaptcha()
      console.log(res)
      this.codeImageUrl = res.captchaImg
      this.loginForm.token = res.token
    },
    // 刷新验证码
    verification() {
      this.codeImageUrl = ''
      this.handleGetCaptcha()
    },
    // 登陆验证
    add() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmitLogin()
        }
      })
    },
    async handleSubmitLogin() {
      try {
        const token = await this.login(this.loginForm)
        if (!token) return
        this.$notify({ title: '提示', message: '登录成功', type: 'success' })
        this.loadingStatus = true
        await this.$router.push('/')
      } catch (e) {
        console.log(e)
      } finally {
        this.loadingStatus = false
      }
    },
    /**
     * vuex登录
     */
    ...mapActions({
      login: 'user/login'
    })
  },

  created() {
    this.handleGetCaptcha()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.login {
  height: 100vh;
  background-image: url(https://img1.baidu.com/it/u=3660224759,175068391&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800);
  background-size: 100% 100%;
  overflow: hidden;
}
h1 {
  text-align: center;
  font-size: 30px;
  color: #fff;
  margin: 20px;
}
h2 {
  color: #fff;
  font-size: 30px;
  margin-bottom: 30px;
}
.login-form {
  margin: 10% auto 13%;
  width: 20%;
}
.verify {
  width: 100%;
  display: flex;
  align-items: center;
}
.el-image {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}
.login-button {
  width: 100%;
  border-radius: 5px;
}
</style>
