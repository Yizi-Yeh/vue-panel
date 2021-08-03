<template>
  <div id="permission-wrap">
    <el-row>
      <el-col :span="8" :offset="1"
        ><div class="bulletin-board">
          <h1>新增帳號</h1>
          <p>標示<span style="color:red">＊</span>為必填</p>
        </div></el-col
      >
    </el-row>

    <el-row>
      <el-col :span="8" :offset="1"
        ><div class="bulletin-board">
          <h1>新增帳號</h1>
          <p>標示＊為必填</p>
        </div></el-col
      >
    </el-row>

    <el-row>
      <el-col :span="8" :offset="1"
        ><div class="bulletin-board">
          <h1>新增帳號</h1>
          <p>標示＊為必填</p>
        </div></el-col
      >
    </el-row>

    <el-row>
      <el-col :span="8" :offset="1"
        ><div class="bulletin-board">
          <h1>新增帳號</h1>
          <p>標示＊為必填</p>
        </div></el-col
      >
    </el-row>

    <el-row>
      <el-col :span="8" :offset="1"
        ><div class="bulletin-board">
          <h1>新增帳號</h1>
          <p>標示＊為必填</p>
        </div></el-col
      >
    </el-row>

    <el-row>
      <el-col :span="8" :offset="1"
        ><div class="bulletin-board">
          <h1>新增帳號</h1>
          <p>標示＊為必填</p>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DashboardList',
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/main.scss";
#permission-wrap {
  margin: 5px 30px;
  height: 100%;
  background-color: $color_white;
  border-radius: 15px;
  .bulletin-board {
    @include flex(row, space-around, center);
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
      &:hover {
        cursor: pointer;
      }
    }
    .bulletin-board-content {
      font-size: $text-font-xs;
    }
  }
}
</style>
