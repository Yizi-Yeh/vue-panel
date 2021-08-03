<template>
<el-card  id="dashboard-wrap" class="box-card">
    <el-row>
      <el-col :span="8" :offset="1"
        ><div class="bulletin-board">
          <h1>佈告欄</h1>
          <el-button type="primary" @click="$router.push({ path: `add` })">新增佈告欄 </el-button>
        </div></el-col
      >
    </el-row>

    <el-row class="bulletin-board-daily" v-for="item in 10" :key="item">
      <el-col :span="24" :offset="2"
        ><div class="bulletin-board-date">
          <span>2021 / 07 / 06</span>
          <hr /></div
      ></el-col>
      <el-col :span="24" :offset="3"
        ><div class="bulletin-board-title">
          <span @click="$router.push({ path: `edit/${props.item.id}` })">系統維修通知</span>
        </div></el-col
      >
      <el-col :span="24" :offset="4"
        ><div class="bulletin-board-content">
          <span
            >系統將於民國110年7月6日做系統維修，屆時將暫停系統運作20分鐘</span
          >
        </div></el-col
      >
    </el-row>
  </el-card>
</template>

<script>
export default {
  name: 'DashboardList',
  data () {
    return {}
  }
}
</script>

<style lang="scss">
@import "@/style/main.scss";
#dashboard-wrap {
  margin: 5px 20px;
  border-radius: 15px;
  .bulletin-board {
    @include flex(row, space-around, flex-start);
    margin-top: 20px;
    margin-bottom: 20px;
    h1 {
      font-size: $heading-font-sm;
      font-weight: 400;
      font-style: normal;
    }
  }
  .bulletin-board-daily {
    @include flex(column, flex-start, flex-start);
    margin-bottom: 20px;
    .bulletin-board-date {
      @include flex(row, flex-start, center);
      font-size: $text-font-sm;
      margin-bottom: 3px;
      hr {
        margin-left: 15px;
        width: 200px;
        border: none;
        height: 1px;
        color: $color_black;
        background-color: $color_black;
      }
    }
    .bulletin-board-title {
      font-size: $text-font-xs;
      color: $color_blue;
      margin-bottom: 6px;
      &:hover{
        cursor: pointer;
      }
    }
    .bulletin-board-content {
      font-size: $text-font-xs;
    }
  }
}
</style>
