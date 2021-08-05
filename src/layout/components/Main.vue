<template>
  <el-main>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" /> -->
    <router-view></router-view>
  </el-main>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" scoped>
.el-main {
  min-width: 870px;
  max-width: 870px;
  height: 520px !important;
  background: url(http://www.ildcity.com/client/tsip/images/dashboard/u117.png)
    no-repeat center/100% 100%;
}
</style>
