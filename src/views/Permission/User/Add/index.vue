<template>
  <el-card id="permission-wrap" class="box-card">
    <el-row class="add-user-title">
      <el-col :span="4"><h1 class="title">新增帳號</h1></el-col>
      <el-col :span="8"
        ><span class="subtitle"
          >標示<span class="alert">＊</span>為必填</span
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
      <el-col :span="40">
        <span class="img-intro"
          >個人頭像上傳：格式可接受jpg. png，檔案大小限制為700kb~5mb</span
        >
      </el-col>
    </el-row>

    <el-row>
      <el-col :span="4"
        ><span class="form-title">個人資料</span></el-col
      >
      <el-col :span="10"
        ><el-input
          v-model="input"
          placeholder="姓名＊ ｜ 請輸入聯絡人姓名"
        ></el-input
      ></el-col>
      <el-col  :span="6" :offset="3">
        <el-select v-model="value" clearable placeholder="單位＊ ｜ 請選擇單位">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option> </el-select
      ></el-col>
    </el-row>

    <el-row>
      <el-col :span="8"
        ><el-input v-model="input" placeholder="部門＊ ｜ 請輸入部門"></el-input
      ></el-col>
      <el-col :span="8"
        ><el-input v-model="input" placeholder="電話＊ ｜ 請輸入電話"></el-input
      ></el-col>
    </el-row>
    <el-col :span="8"
      ><el-input
        v-model="input"
        placeholder="電子郵件＊ ｜ 請輸入電子郵件"
      ></el-input
    ></el-col>

    <el-row
      ><el-col><span class="form-title">帳號設定</span></el-col></el-row
    >
    <el-row
      ><el-col><span class="form-title">備註資料</span></el-col></el-row
    >
    <el-row
      ><el-col><span class="form-title">按鈕</span></el-col></el-row
    >
  </el-card>
</template>

<script>
export default {
  name: 'AddUser',
  data () {
    return {}
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
    margin-left: 120px;
    margin-bottom: 15px;
    .img-intro {
      margin-left: 20px;
      color: $color_light_grey;
      font-size: 14px;
    }
  }
}
</style>
