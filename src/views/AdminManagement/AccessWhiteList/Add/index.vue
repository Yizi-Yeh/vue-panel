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
              <el-form-item class="form-item" required prop="name">
                <el-input
                  v-model="ruleForm.name"
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
              <el-form-item class="form-item" required prop="company">
                <el-input
                  v-model="ruleForm.company"
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
              <el-form-item class="form-item" required prop="department">
                <el-input
                  v-model="ruleForm.department"
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
              <el-form-item class="form-item" required prop="employeeId">
                <el-input
                  v-model="ruleForm.employeeId"
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
              <el-form-item class="form-item" required prop="category">
                <el-select
                  placeholder="請選擇類別＊｜"
                  v-model="ruleForm.category"
                >
                  <!-- <template slot="prefix" class="prefix-left">
                    類別 <span style="color: #ED6363">＊ </span
                    ><span>｜</span></template
                  > -->
                  <el-option
                    v-for="item in ruleForm.categoryOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="form-item" required prop="cardId">
                <el-input
                  v-model="ruleForm.cardId"
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
              <el-form-item class="form-item" required prop="apply">
                <el-input
                  v-model="ruleForm.apply"
                  autocomplete="off"
                  placeholder="請輸入申請事由"
                >
                  <template slot="prepend"
                    >申請事由 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item class="form-item" required prop="fromDate">
                <el-date-picker
                  v-model="ruleForm.fromDate"
                  type="date"
                  placeholder="生效日期＊｜"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="form-item" required prop="toDate">
                <el-date-picker
                  v-model="ruleForm.toDate"
                  type="date"
                  placeholder="終止日期＊｜"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item class="form-item" required prop="fromTime">
                <el-time-select
                  v-model="ruleForm.fromTime"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                  }"
                  placeholder="生效時間＊｜"
                >
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item class="form-item" required prop="toTime">
                <el-time-select
                  v-model="ruleForm.toTime"
                  :picker-options="{
                    start: '08:30',
                    step: '00:15',
                    end: '18:30',
                  }"
                  placeholder="終止時間＊｜"
                >
                </el-time-select>
              </el-form-item>
            </el-col>
            <el-col :span="24" style="margin-bottom:10px">
              <el-checkbox v-model="ruleForm.checked"
                >無限制終止日期</el-checkbox
              >
            </el-col>
            <el-col :span="24">
              <el-form-item class="form-item" required prop="auth">
                <el-select
                  placeholder="請選擇權限區域＊｜"
                  v-model="ruleForm.auth"
                >
                  <!-- <template slot="prefix"
                    >權限 <span style="color: #ED6363">＊ </span
                    ><span>｜</span></template
                  > -->
                  <el-option
                    v-for="item in ruleForm.authOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <!-- <el-checkbox-group  required prop="region"> -->
            <el-col style="margin-bottom:20px">
              <el-checkbox
                v-for="item in ruleForm.regionList"
                :key="item.region"
                :label="item.region"
                :value="item.region"
                v-model="ruleForm.selectedRegion"
                border
              ></el-checkbox
            ></el-col>
            <!-- <el-col :span="4"
                ><el-checkbox label="E1-2" border></el-checkbox
              ></el-col>
              <el-col :span="4"
                ><el-checkbox label="E1-3" border></el-checkbox
              ></el-col>
              <el-col :span="4"
                ><el-checkbox label="E1-4" border></el-checkbox
              ></el-col>
              <el-col :span="4"
                ><el-checkbox label="E1-5" border></el-checkbox
              ></el-col>
              <el-col :span="4"
                ><el-checkbox label="E1-6" border></el-checkbox
              ></el-col>
              <el-col :span="4"
                ><el-checkbox label="E1-7" border></el-checkbox
              ></el-col>
              <el-col :span="4"
                ><el-checkbox label="E1-8" border></el-checkbox
              ></el-col>
              <el-col :span="4"
                ><el-checkbox label="E1-9" border></el-checkbox
              ></el-col>
              <el-col :span="4"
                ><el-checkbox label="E1-10" border></el-checkbox
              ></el-col>
              <el-col :span="4" style="margin-bottom:10px"
                ><el-checkbox label="E1-11" border></el-checkbox
              ></el-col> -->
            <!-- </el-checkbox-group> -->

            <el-col>
              <el-form-item class="form-item">
                <el-input
                  v-model="ruleForm.memo"
                  autocomplete="off"
                  placeholder="請輸入備註資料"
                >
                  <template slot="prepend">備註</template></el-input
                >
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >新增</el-button
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
    return {
      ruleForm: {
        name: '',
        company: '',
        department: '',
        employeeId: '',
        categoryOptions: [
          {
            value: 'employee',
            label: '員工'
          },
          {
            value: 'vendor',
            label: '廠商'
          }
        ],
        authOptions: [
          {
            value: 'random',
            label: '自訂'
          }
        ],
        category: '',
        cardId: '',
        apply: '',
        fromDate: '',
        fromTime: '',
        toDate: '',
        toTime: '',
        selectedRegion: [],
        regionList: [
          { region: 'E1-1' },
          { region: 'E1-2' },
          { region: 'E1-3' },
          { region: 'E1-4' },
          { region: 'E1-5' },
          { region: 'E1-6' },
          { region: 'E1-7' },
          { region: 'E1-8' },
          { region: 'E1-9' },
          { region: 'E1-10' }
        ],
        checked: ''
      },
      rules: {
        name: [
          { required: true, message: '請輸入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '長度在 2 到 5 個字符', trigger: 'blur' }
        ],
        company: [{ required: true, message: '請輸入單位', trigger: 'blur' }],
        department: [{ required: true, message: '請輸入部門', blur: 'blur' }],
        employeeId: [
          { required: true, message: '請輸入工號', trigger: 'change' }
        ],
        cardId: [{ required: true, message: '請輸入卡號', trigger: 'blur' }],
        apply: [{ required: true, message: '請輸入申請事由', trigger: 'blur' }],
        fromDate: [
          {
            type: 'date',
            required: true,
            message: '請選擇生效日期',
            trigger: 'change'
          }
        ],
        fromTime: [
          {
            type: 'date',
            required: true,
            message: '請選擇生效時間',
            trigger: 'change'
          }
        ],
        toDate: [
          {
            type: 'date',
            required: true,
            message: '請選擇終止日期',
            trigger: 'change'
          }
        ],
        toTime: [
          {
            type: 'date',
            required: true,
            message: '請選擇終止時間',
            trigger: 'change'
          }
        ],
        region: [
          {
            type: 'array',
            required: true,
            message: '請至少選一個區域',
            trigger: 'change'
          }
        ],
        category: [
          { required: true, message: '請選擇類別', trigger: 'change' }
        ],
        auth: [
          { required: true, message: '請選擇權限區域', trigger: 'change' }
        ]
      }
    }
  },
  methods: {
    submitForm (ruleForm) {
      //   this.$refs[ruleForm].validate((valid) => {
      //     if (valid) {
      //       alert('submit!')
      //     } else {
      //       console.log('error submit!!')
      //       return false
      //     }
      //   })
      console.log(this.ruleForm.selectedRegion)
    },
    resetForm (ruleForm) {
      this.$refs[ruleForm].resetFields()
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
    text-align: center;
    width: 100%;
    @include flex(row, center, flex-start);
    .form-title-container {
      @include flex(column, center, center);
      width: 17%;
      .form-title {
        text-align: left;
        width: 100%;
        height: 190px;
      }
    }
    .form-panel {
      @include flex(column, center, flex-start);
      width: 83%;
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
