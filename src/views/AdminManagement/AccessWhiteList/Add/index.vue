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
        <div class="form-title mt-30"><span>權限內容</span></div>
        <div class="form-title-4 mt-35"><span>備註資料</span></div>
      </div>

      <div class="form-panel">
        <el-form
          class="form"
          :model="accessWhitelisting"
          status-icon
          :rules="rules"
          ref="accessWhitelisting"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item class="form-item" required prop="name">
                <el-input
                  v-focus
                  v-model="accessWhitelisting.name"
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
                  v-model="accessWhitelisting.company"
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
                  v-model="accessWhitelisting.department"
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
              <el-form-item class="form-item" required prop="worker_id">
                <el-input
                  v-model="accessWhitelisting.worker_id"
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
              <el-form-item class="form-item" required prop="type">
                <el-select
                  placeholder="請選擇類別＊｜"
                  v-model="accessWhitelisting.type"
                >
                  <!-- <template slot="prefix" class="prefix-left">
                    類別 <span style="color: #ED6363">＊ </span
                    ><span>｜</span></template
                  > -->
                  <el-option
                    v-for="item in categoryOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >{{ item.label }}
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col :span="12">
              <el-form-item class="form-item" required prop="card_id">
                <el-input
                  v-model="accessWhitelisting.card_id"
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
              <el-form-item class="form-item" required prop="reason">
                <el-input
                  v-model="accessWhitelisting.reason"
                  autocomplete="off"
                  placeholder="請輸入申請事由"
                >
                  <template slot="prepend"
                    >申請事由 <span style="color: #ED6363">＊</span></template
                  ></el-input
                >
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-col :span="12">
                <el-form-item class="form-item" prop="start_date">
                  <el-date-picker
                    style="width: 100%"
                    v-model="accessWhitelisting.start_date"
                    type="datetime"
                    placeholder="選擇生效日期時間"
                    value-format="yyyy-MM-dd HH:mm:ss"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item class="form-item" prop="end_date">
                  <el-date-picker
                    style="width: 100%"
                    :disabled="check ? true : false"
                    v-model="accessWhitelisting.end_date"
                    type="datetime"
                    value-format="yyyy-MM-dd HH:mm:ss"
                    placeholder="選擇結束日期時間"
                  >
                  </el-date-picker>
                </el-form-item>
              </el-col>

              <el-col
                class="endDateCheck"
                :span="24"
                style="margin-bottom:10px"
              >
                <el-checkbox @change="deleteEndDate()" v-model="check"
                  >無限制終止日期</el-checkbox
                >
              </el-col>
            </el-col>
            <el-col :span="24">
              <el-form-item class="form-item" required prop="content">
                <el-select
                  placeholder="請選擇權限區域＊｜"
                  v-model="accessWhitelisting.content"
                >
                  <!-- <template slot="prefix"
                    >權限 <span style="color: #ED6363">＊ </span
                    ><span>｜</span></template
                  > -->
                  <el-option
                    v-for="item in authOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    >{{ item.label }}
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>

            <el-col>
              <el-form-item prop="machine">
                <el-checkbox-group v-model="accessWhitelisting.machine">
                  <el-checkbox
                    style="margin-bottom:20px"
                    v-for="item in regionList"
                    :key="item.value"
                    :label="item.value"
                    :value="item.value"
                    border
                    >{{ item.region }}</el-checkbox
                  >
                </el-checkbox-group>
              </el-form-item>
            </el-col>

            <el-col :span="24">
              <el-form-item class="form-item" prop="memo">
                <el-input
                  v-model="accessWhitelisting.memo"
                  autocomplete="off"
                  placeholder="請輸入備註資料"
                >
                  <template slot="prepend">備註</template></el-input
                >
              </el-form-item>
            </el-col>

            <el-col :span="24" class="submit-form">
              <el-form-item>
                <el-button @click="resetForm('accessWhitelisting')"
                  >重置</el-button
                >
                <el-button
                  type="primary"
                  @click="submitForm('accessWhitelisting')"
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
      accessWhitelisting: {
        name: 'Yizi',
        company: 'Juststar',
        department: 'tech',
        card_id: '312321312313',
        type: '',
        worker_id: '32132131231',
        reason: 'song',
        start_date: '',
        end_date: '',
        content: 'test',
        machine: []
        // memo: ''
      },
      check: false,
      regionList: [
        { region: 'E1-1', value: 1 },
        { region: 'E1-2', value: 2 },
        { region: 'E1-3', value: 3 },
        { region: 'E1-4', value: 4 },
        { region: 'E1-5', value: 5 },
        { region: 'E1-6', value: 6 },
        { region: 'E1-7', value: 7 },
        { region: 'E1-8', value: 8 },
        { region: 'E1-9', value: 9 },
        { region: 'E1-10', value: 10 }
      ],
      categoryOptions: [
        {
          value: '1',
          label: '員工'
        },
        {
          value: '2',
          label: '廠商'
        }
      ],
      authOptions: [
        {
          value: 'test',
          label: '自訂'
        }
      ],
      rules: {
        name: [
          { required: true, message: '請輸入姓名', trigger: 'blur' },
          { min: 2, max: 5, message: '長度在 2 到 5 個字符', trigger: 'blur' }
        ],
        company: [{ required: true, message: '請輸入單位', trigger: 'blur' }],
        department: [{ required: true, message: '請輸入部門', blur: 'blur' }],
        worker_id: [
          { required: true, message: '請輸入工號', trigger: 'change' }
        ],
        card_id: [{ required: true, message: '請輸入卡號', trigger: 'blur' }],
        reason: [
          { required: true, message: '請輸入申請事由', trigger: 'blur' }
        ],
        start_date: [
          {
            type: 'string',
            required: true,
            message: '請選擇生效時間',
            trigger: 'change'
          }
        ],
        // end_date: [
        //   {
        //     type: 'string',
        //     required: true,
        //     message: '請選擇有效時間',
        //     trigger: 'change'
        //   }
        // ],
        machine: [
          {
            type: 'array',
            required: true,
            message: '請至少選一個區域',
            trigger: 'change'
          }
        ],
        type: [{ required: true, message: '請選擇類別', trigger: 'change' }],
        content: [
          { required: true, message: '請選擇權限區域', trigger: 'change' }
        ]
      },
      deleteEndDate () {
        if (this.check) {
          this.accessWhitelisting.end_date = null
        }
      }
    }
  },
  methods: {
    submitForm (accessWhitelisting) {
      this.$refs[accessWhitelisting].validate((valid) => {
        if (!valid) {
          return false
        }
      })
      this.axios
        .post('/api/personwhitelist', this.accessWhitelisting)
        .then((res) => {
          console.log(this.accessWhitelisting)
          if (res.data.Status === 0) {
            this.$swal.fire({
              icon: 'success',
              title: '門禁白名單新增完成',
              text: '資料新增完成！可至車牌白名單查看。',
              confirmButtonColor: '#1DB0DD',
              confirmButtonText: '我知道了'
            })
          } else {
            this.$swal.fire({
              icon: 'error',
              title: '門禁白名單新增失敗',
              confirmButtonColor: '#1DB0DD',
              confirmButtonText: 'OK'
            })
          }
        })
        .catch((err) => {
          this.$swal({
            icon: 'error',
            title: '門禁白名單新增失敗',
            text: err.response.message,
            confirmButtonColor: '#1DB0DD',
            confirmButtonText: 'OK'
          })
        })
    },
    resetForm (accessWhitelisting) {
      this.$swal({
        title: '確定要重置表單嗎？',
        text: '注意，此動作不可復原',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#ED6262',
        confirmButtonText: '確定',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$refs[accessWhitelisting].resetFields()
        }
      })
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
        &-4 {
          height: auto;
          text-align: left;
          width: 100%;
          color: $color_light_grey;
        }
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
.mt-30 {
  margin-top: -30px;
}
.mt-35 {
  margin-top: 15px;
}
.el-button {
  width: 160px;
  margin-right: 27px;
  margin-top: 20px;
}
</style>
