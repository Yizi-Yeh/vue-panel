<template>
  <el-container id="layout">
    <el-container class="layout-wrapper">
      <Aside />
      <el-container class="layout-main">
        <el-container class="layout-main-top">
          <Header />
          <SubItems />
        </el-container>
        <Main />
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './components/Aside/index.vue'
import Header from './components/Header.vue'
import SubItems from './components/SubItems.vue'
import Main from './components/Main.vue'

export default {
  name: 'Layout',
  components: {
    Aside,
    Header,
    SubItems,
    Main
  }
}
</script>

<style lang="scss">
@import "@/style/main.scss";
#layout {
  width: 100%;
  padding-top: 30px;
  padding-left: 45px;
  padding-right: 45px;
  min-height: 100%;
  background: url(~@/assets/layout-background.png) no-repeat center/100% 100%;
  .layout-wrapper {
    height: 100%;
    .layout-main {
      height: inherit;
      padding-left: 25px;
      @include flex(column, center, center);
    }
    .layout-main-top {
      width: 100%;
      height: 100px;
      @include flex(column,center, flex-end);
    }
  }
}
</style>
