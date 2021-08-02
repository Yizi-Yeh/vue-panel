<template>
  <div id="userLayout" class="user-layout-wrapper">
    <div class="container">
      <div class="top">
        <img class="logo-login" src="@/assets/logo.png" alt="" />
      </div>
      <div class="main">
        <el-form
          :model="loginForm"
          :rules="rules"
          ref="loginForm"
          @keyup.enter="submitForm"
        >
          <el-form-item class="form-item" prop="username">
            <el-input
              placeholder="Please Enter your Account"
              class="form-input"
              v-model="loginForm.username"
            >
              <i class="el-input__icon el-icon-user" slot="suffix"></i
            ></el-input>
          </el-form-item>
          <el-form-item prop="password" form-item>
            <el-input
              show-password
              placeholder="Please Enter your Password"
              v-model="loginForm.password"
            >
              <i class="el-input__icon el-icon-lock" slot="suffix"></i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm" style="width: 100%"
              >Login</el-button
            >
          </el-form-item>
          <el-form-item class="bottom">
            <el-checkbox v-model="checked">Remember me</el-checkbox>
            <span>Forget your password?</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    const checkAccount = (rule, value, callback) => {
      if (value.length < 5 || value.length > 12) {
        return callback(new Error('Confirm your account'))
      } else {
        callback()
      }
    }
    const checkPassword = (rule, value, callback) => {
      if (value.length < 6 || value.length > 12) {
        return callback(new Error('Confirm your password'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ validator: checkAccount, trigger: 'blur' }],
        password: [{ validator: checkPassword, trigger: 'blur' }]
      },
      checked: false
    }
  },
  created () {},
  methods: {
    async submitForm () {
      this.$refs.loginForm.validate(async v => {
        if (v) {
          const flag = await this.login()
          if (!flag) {
            this.loginVefify()
          }
        } else {
          this.$message({
            type: 'error',
            message: '請輸入正確資料',
            showClose: true
          })
          return false
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "@/style/main.scss";
@import "@/style/login.scss";
</style>
