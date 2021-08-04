<template>
  <nav>
    <el-menu class="layout-header">
      <img
        src="http://www.ildcity.com/client/tsip/images/dashboard/u126.png"
        alt=""
      />
      <el-menu-item class="layout-header-items" index="1"
        >歷史數據</el-menu-item
      >
      <span>|</span>
      <img
        src="http://www.ildcity.com/client/tsip/images/dashboard/u127.png"
        alt=""
      />
      <el-menu-item class="layout-header-items" index="1"
        >歷史事件</el-menu-item
      >
      <span>|</span>
      <img
        src="http://www.ildcity.com/client/tsip/images/dashboard/u128.png"
        alt=""
      />
      <el-menu-item class="layout-header-items" index="1"
        >即時事件</el-menu-item
      >
    </el-menu>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
@import "@/style/main.scss";
.layout-header {
  @include flex(row, space-between, center);
  width: 450px;
  flex-grow: 0.4;
  background-color: transparent;
  margin-right: -400px;
  &-items {
    text-align: center;
    color: $color_blue;
    font-size: $text-font-md;
    padding: 0 !important;
    margin-left: -20px;
  }
  > img {
    height: 27px;
    object-fit: cover;
  }
}
</style>
