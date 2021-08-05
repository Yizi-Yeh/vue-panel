<template>
    <nav  v-if="false">
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
</style>
