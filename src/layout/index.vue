<template>
  <el-container id="layout">
    <el-container class="layout-wrapper">
      <Aside />
      <el-container class="layout-main">
        <SubItems />
        <Main />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './components/Aside/index.vue'
import SubItems from './components/SubItems.vue'
import Main from './components/Main.vue'
export default {
  name: 'Layout',
  components: {
    Aside,
    SubItems,
    Main
  }
}
</script>

<style lang="scss">
@import "@/style/main.scss";
#layout {
  width: 100%;
  padding-top: 10px;
  padding-left: 120px;
  padding-right: 120px;
  min-height: 100%;
  background: url(~@/assets/layout-background.png) no-repeat center/100% 100%;
  .layout-wrapper {
     height: 630px;
    .layout-main {
      @include flex(column, center, center);
    }
  }
}
</style>
