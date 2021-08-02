<template>
  <el-aside class="layout-aside">
    <AsideLogo />
    <div class="layout-aside-wrap">
      <AsideItems />
    </div>
  </el-aside>
</template>

<script>
import AsideItems from './AsideItems.vue'
import AsideLogo from './AsideLogo.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'Aside',
  components: { AsideItems, AsideLogo },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['permissionRoutes', 'sidebar'])
  }
}
</script>
<style lang="scss">
.layout-aside {
  margin-right: 50px;
  height: inherit;
  width: 280px !important;
  &-wrap{
    background: url(~@/assets/aside-menu.png) no-repeat center/100% 100%;
    height: 520px;
  }
}
</style>
