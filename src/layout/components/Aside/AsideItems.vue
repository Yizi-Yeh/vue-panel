<template>
  <nav>
    <el-menu class="layout-aside-menu">
      <el-menu-item class="layout-aside-items" index="1">
        <router-link to="/">首頁</router-link>
      </el-menu-item>
      <hr />
      <el-menu-item class="layout-aside-items" index="1">
        <router-link to="/adminmanagement">行政管理系統</router-link>
      </el-menu-item>
      <hr />
      <el-menu-item class="layout-aside-items" index="1">
        <router-link to="/auth">權限管理</router-link>
      </el-menu-item>
      <hr />
      <el-menu-item class="layout-aside-items" index="1">
        <router-link to="/maintain">保養維護</router-link>
      </el-menu-item>
      <hr />
    </el-menu>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "@/style/main.scss";
.layout-aside-menu {
  background-color: transparent !important;
  height: inherit;
  padding: 15px;
  .layout-aside-items {
    margin-top: 5px;
    text-align: center;
    color: $color_blue;
    font-size: $text-font-lg;
    &:hover {
      background-color: transparent;
    }
  }
  hr {
    max-width: 200px;
    margin-left: auto;
    margin-right: auto;
    border: none;
    height: 1px;
    color: $color_blue; /* old IE */
    background-color: $color_blue; /* Modern Browsers */
  }
}
</style>
