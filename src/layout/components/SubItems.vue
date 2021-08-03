<template>
  <el-container class="layout-main-top">
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
    <nav >
      <el-menu class="layout-submenu">
        <el-menu-item class="layout-subitems">
          <router-link to="/adminmanagement/parking"
            >帳號管理</router-link
          ></el-menu-item
        >
        <el-menu-item class="layout-subitems"
          ><router-link to="/adminmanagement/access-control"
            >單位管理</router-link
          ></el-menu-item
        >
        <el-menu-item class="layout-subitems"
          ><router-link to="/adminmanagement/visitor"
            >權限群組</router-link
          ></el-menu-item
        >
        <el-menu-item  class="layout-subitems"
          ><router-link to="/adminmanagement/equipment"
            >？？管理</router-link
          ></el-menu-item
        >
      </el-menu>
    </nav>
  </el-container>

</template>

<script>
export default {
  name: 'SubItems',
  data () {
    return {}
  },
  methods: {}
}
</script>

<style lang="scss">
@import "@/style/main.scss";
.layout-main-top {
  height: 110px !important;
  width: 100%;
  top:80px;
  @include flex(column, center, center);
  .layout-header {
    @include flex(row, space-between, center);
    width: 450px;
    flex-grow: 0.4;
    background-color: transparent;
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
  .layout-submenu {
    background-color: transparent;
    @include flex(row, flex-start, flex-end);
    margin-left: -103px;
    .layout-subitems {
      background-color: transparent;
      background: url(http://www.ildcity.com/client/tsip/images/adminman_p1-1/u176.png)
        no-repeat center/100% 100%;
      height: 55px;
      width: 183px;
      margin-left: -14px;
      text-align: center;
      font-size: $text-font-lg;
      margin-bottom: -12px;
      > a {
        color: $color_white ;
      }
    }
  }
}
</style>
