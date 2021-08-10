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

      <!-- <el-menu-item class="layout-aside-items" index="2">
        <span slot="title">
          <router-link to="/adminmanagement">行政管理系統</router-link></span
        >
      </el-menu-item> -->

      <el-row class="tac">
        <el-col :span="24">
          <el-menu class="layout-aside-items">
            <el-submenu index="1">
              <template slot="title">
                <span>行政管理系統</span>
              </template>
              <el-submenu index="1-1">
                <template slot="title">停車場管理</template>
                <el-menu-item index="1-1">車牌白名單</el-menu-item>
                <el-menu-item index="1-3">停管系統後台</el-menu-item>
              </el-submenu>
              <el-submenu index="1-2">
                <template slot="title">門禁管理</template>
                <!-- <el-menu-item index="1-1">管制狀態</el-menu-item>
                <el-menu-item index="1-2">白名單總覽</el-menu-item> -->
                <router-link
                  to="/adminmanagement/access-control/access-white-list/add"
                  ><el-menu-item index="1-3"
                    >新增白名單</el-menu-item
                  ></router-link
                >
                <router-link
                  to="/adminmanagement/access-control/emergency-release"
                >
                  <el-menu-item index="1-4">
                    緊急控管</el-menu-item
                  ></router-link
                >
                <!-- <el-menu-item index="1-5">權限管理</el-menu-item> -->
              </el-submenu>
              <el-submenu index="1-3">
                <template slot="title">訪客系統</template>
                <el-menu-item index="1-1">訪客登記</el-menu-item>
                <el-menu-item index="1-2">黑名單</el-menu-item>
                <el-menu-item index="1-3">訪客管理</el-menu-item>
              </el-submenu>
              <el-submenu index="1-4">
                <template slot="title">資源管理</template>
                <el-menu-item index="1-1">總覽</el-menu-item>
                <el-menu-item index="1-2">資源管理</el-menu-item>
                <el-menu-item index="1-3">建立資料</el-menu-item>
                <el-menu-item index="1-3">管理後台</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
      <hr />
      <el-menu-item class="layout-aside-items" index="3">
        <router-link to="/permission">權限管理</router-link>
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
  @include flex(column, center, center);
  .layout-aside-items {
    width: 230px;
    margin-top: 5px;
    margin-left: 17px;
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
  a {
    color: $color_blue;
  }
}

.layout-aside-menu .layout-aside-items {
  margin-top: 5px;
  text-align: center;
  color: #1db0dc;
  font-size: 1.125rem;
}
.el-submenu__title i {
  color: $color_blue;
  font-weight: bold;
  margin-right: 15px;
}
</style>
