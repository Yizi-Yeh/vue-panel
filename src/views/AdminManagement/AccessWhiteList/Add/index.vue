<template>
  <el-card id="access-wrap" class="box-card">
    <el-row class="add-access-white-title">
      <el-col :span="4"><h1 class="title">新增資料</h1></el-col>
      <el-col :span="8"
        ><span class="subtitle"
          >標示<span class="alert"> ＊ </span>為必填</span
        ></el-col
      >
    </el-row>

    <div class="form-container">
      <div class="form-title-container">
        <div class="form-title"><span>人員資料</span></div>
        <div class="form-title"><span>門禁設定</span></div>
        <div class="form-title"><span>權限內容</span></div>
        <div class="form-title"><span>備註資料</span></div>
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
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入單位"
                >
                  <template slot="prepend"
                    >單位 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入部門名稱"
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
                  placeholder="請輸入工號"
                >
                  <template slot="prepend"
                    >工號 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-select placeholder="">
                  <template slot="prefix"
                    >類別 <span style="color: #ED6363">＊ </span
                    ><span>｜</span></template
                  >
                  <el-option label="XXX股份有限公司" value="1"></el-option>
                  <el-option label="OOO股份有限公司" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入卡號"
                >
                  <template slot="prepend"
                    >卡號 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入申請事由"
                >
                  <template slot="prepend"
                    >申請事由 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>
            <el-col :span="12" style="margin-bottom: 22px">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="生效日期"
              >
              </el-date-picker>
            </el-col>
            <el-col :span="12" style="margin-bottom: 22px">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="value1"
                type="date"
                placeholder="終止日期"
              >
              </el-date-picker>
            </el-col>
            <el-col :span="12" style="margin-bottom: 22px">
              <el-time-select
                v-model="value"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                }"
                placeholder="生效時間"
              >
              </el-time-select>
            </el-col>
            <el-col :span="12">
              <el-time-select
                v-model="value"
                :picker-options="{
                  start: '08:30',
                  step: '00:15',
                  end: '18:30',
                }"
                placeholder="終止時間"
              >
              </el-time-select>
            </el-col>
            <el-col :span="24" style="margin-bottom:10px">
              <el-checkbox v-model="checked">無限制終止日期</el-checkbox>
            </el-col>
            <el-col :span="24">
              <el-form-item class="form-item" required prop="pass">
                <el-select placeholder="">
                  <template slot="prefix"
                    >權限 <span style="color: #ED6363">＊ </span
                    ><span>｜</span></template
                  >
                  <el-option label="XXX股份有限公司" value="1"></el-option>
                  <el-option label="OOO股份有限公司" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <div >
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-1" border></el-checkbox
            ></el-col>
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-2" border></el-checkbox
            ></el-col>
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-3" border></el-checkbox
            ></el-col>
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-4" border></el-checkbox
            ></el-col>
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-5" border></el-checkbox
            ></el-col>
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-6" border></el-checkbox
            ></el-col>
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-7" border></el-checkbox
            ></el-col>
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-8" border></el-checkbox
            ></el-col>
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-9" border></el-checkbox
            ></el-col>
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-10" border></el-checkbox
            ></el-col>
            <el-col :span="4"
              ><el-checkbox v-model="checked4" label="E1-11" border></el-checkbox
            ></el-col>
            <el-col :span="4" style="margin-bottom:18px"
              ><el-checkbox v-model="checked4" label="E1-12" border></el-checkbox
            ></el-col>
            </div>
            <el-col :span="24" style="margin-bottom: 22px">
              <el-form-item class="form-item" required prop="pass">
                <el-input
                  v-model="ruleForm.pass"
                  autocomplete="off"
                  placeholder="請輸入備註資料"
                >
                  <template slot="prepend"
                    >備註 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >

              </el-form-item>
              </el-col>
               <el-col :span="24">
                  <el-form-item>
                    <el-button>取消</el-button>
                    <el-button type="primary" @click="onSubmit">新增</el-button>
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

<style lang="scss" scoped>
@import "@/style/main.scss";
#access-wrap {
  box-sizing: border-box;
  margin: 5px 20px;
  border-radius: 15px;
  padding: 15px;
  font-family: Noto Sans TC;
  height: 99%;
  overflow: auto;
  .add-access-white-title {
    @include flex(row, flex-start, center);
    margin-bottom: 20px;
    .title {
      font-size: $heading-font-xs;
    }
    .subtitle {
      color: $color_light_grey;
      font-size: $text-font-md;
      .alert {
        color: $color_light_red;
      }
    }
  }

  .form-container {
    // border: 2px solid rosybrown;
    text-align: center;
    width: 100%;
    @include flex(row, center, flex-start);
    .form-title-container {
      @include flex(column, center, center);
    //   border: 2px solid rgb(54, 105, 99);
      width: 17%;
      .form-title {
        text-align: left;
        width: 100%;
        height: 190px;
        // border: 1px solid rgb(196, 190, 155);
      }
    }
    .form-panel {
      @include flex(column, center, flex-start);
      width: 83%;
      //   border: 2px solid rgb(100, 150, 230);
      .form {
        @include flex(column, center, flex-start);
        &-item {
          margin-right: 20px;
        }
      }
    }
  }
}

.el-input__prefix {
  background-color: transparent;
  color: $color_blue;
  vertical-align: middle;
  border: 1px solid $color_grey;
}

.permission-select {
  text-align: left;
  color: $color_blue;
  font-size: $text-font-md;
  margin-bottom: 20px;
}
.permission-select-group {
  text-align: center;
  font-size: $text-font-md;
  margin-bottom: 20px;
}
.el-select {
  width: 100%;
  display: inline-block;
  position: relative;
}
</style>
