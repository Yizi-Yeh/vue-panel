<template>
  <el-main>
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" /> -->
    <router-view>
    </router-view>
  </el-main>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style lang="scss" scoped>
.el-main {
  width: 100%;
  height: 520px !important;
  background: url(http://www.ildcity.com/client/tsip/images/dashboard/u117.png)
    no-repeat center/100% 100%;
}
</style>
