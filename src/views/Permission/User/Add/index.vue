<template>
  <el-card id="permission-wrap" class="box-card">
    <el-row class="add-user-title">
      <el-col :span="4"><h1 class="title">新增帳號</h1></el-col>
      <el-col :span="8"
        ><span class="subtitle"
          >標示<span class="alert"> ＊ </span>為必填</span
        ></el-col
      >
    </el-row>

    <el-row class="img-upload">
      <el-col :span="5">
        <img-inputer
          style="height:115px ;width:115px"
          v-model="file"
          theme="light"
          size="small"
          accept="image/jpeg,image/png"
          placeholder="頭像"
        />
      </el-col>
      <el-col :span="20">
        <span class="img-intro"
          >個人頭像上傳：格式可接受jpg. png，檔案大小限制為700kb~5mb</span
        >
      </el-col>
    </el-row>

    <div class="form-container">
      <div class="form-title">
        <span>個人資料</span>
      </div>

      <div class="form-panel">
        <el-form
          class="form"
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入姓名"
                >
                  <template slot="prepend"
                    >姓名 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-select v-model="imgSize" placeholder="">
                  <template slot="prefix">單位<span style="color: #ED6363">＊</span></template>
                  <el-option label="XXX股份有限公司" value="M"></el-option>
                  <el-option label="OOO股份有限公司" value="L"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入部門"
                >
                  <template slot="prepend"
                    >部門 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入電話"
                >
                  <template slot="prepend"
                    >電話 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入電子郵件"
                >
                  <template slot="prepend"
                    >電子郵件 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>

    <div class="form-container">
      <div class="form-title">
        <span>帳號設定</span>
      </div>

      <div class="form-panel">
        <el-form
          class="form"
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入帳號"
                >
                  <template slot="prepend"
                    >帳號 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入密碼"
                >
                  <template slot="prepend"
                    >密碼 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請選擇權限組別"
                >
                  <template slot="prepend"
                    >權限組別 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請選擇類別"
                >
                  <template slot="prepend"
                    >類別 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'))
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'))
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'))
          } else {
            callback()
          }
        }
      }, 1000)
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('請輸入姓名'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: ''
      },
      rules: {
        pass: [{ validator: validatePass, trigger: 'blur' }],
        checkPass: [{ validator: validatePass2, trigger: 'blur' }],
        age: [{ validator: checkAge, trigger: 'blur' }]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss">
@import "@/style/main.scss";
#permission-wrap {
  margin: 5px 20px;
  border-radius: 15px;
  padding: 15px;
  font-family: Noto Sans TC;
  .add-user-title {
    @include flex(row, flex-start, center);
    margin-bottom: 15px;
    .title {
      font-size: $heading-font-sm;
    }
    .subtitle {
      color: $color_light_grey;
      font-size: $text-font-md;
      .alert {
        color: $color_light_red;
      }
    }
  }
  .img-upload {
    @include flex(row, flex-start, center);
    margin-left: 130px;
    margin-bottom: 15px;
    .img-intro {
      margin-left: 20px;
      color: $color_light_grey;
      font-size: 14px;
    }
  }

  .form-container {
    // border: 1px solid firebrick;
    text-align: center;
    width: 100%;
    @include flex(row, center, flex-start);
    .form-title {
      padding: 11px;
      width: 17%;
      height: 100%;
      // border: 1px solid rgb(12, 11, 11);
    }
    .form-panel {
      @include flex(column, center, center);
      padding: 10px;
      width: 83%;
      // border: 1px solid rgb(51, 178, 34);
      .form {
        @include flex(column, center, center);
        &-item {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
