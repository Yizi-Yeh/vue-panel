<template>
  <nav>
    <el-menu class="layout-aside-menu">
      <el-menu-item class="layout-aside-items" index="1">
        <span slot="title"> <router-link to="/">首頁</router-link></span>
      </el-menu-item>
      <hr />
      <!-- <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>行政管理系統</span>
        </template>

        <el-menu-item-group title="停車場管理">
          <el-menu-item index="1-1">車牌白名單</el-menu-item>
          <el-menu-item index="1-2">停管系統後台</el-menu-item>
        </el-menu-item-group>

        <el-menu-item-group title="門禁管理">
          <el-menu-item index="1-1">總覽</el-menu-item>
          <el-menu-item index="1-2">白名單</el-menu-item>
          <el-menu-item index="1-3">緊急控管</el-menu-item>
          <el-menu-item index="1-4">後台管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu> -->

      <el-menu-item class="layout-aside-items" index="2">
        <span slot="title">
          <router-link to="/adminmanagement">行政管理系統</router-link></span
        >
      </el-menu-item>
      <hr />
      <el-menu-item class="layout-aside-items" index="3">
        <span slot="title">
          <router-link to="/permission">權限管理</router-link>
        </span>
      </el-menu-item>
      <hr />
      <el-menu-item class="layout-aside-items" index="4">
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
.router-link-active {
  color: $color_white;
}
</style>
