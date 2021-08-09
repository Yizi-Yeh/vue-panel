<template>
  <el-main id="main-content">
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
#main-content {
  min-width: 1003px;
  max-width: 1003px;
  height: 589px;
  background: url(http://www.ildcity.com/client/tsip/images/dashboard/u117.png)
    no-repeat center/100% 100%;
}
</style>
