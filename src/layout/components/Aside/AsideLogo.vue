<template>
  <div class="aside-logo">
    <img @click="backToDefaultPage()" src="@/assets/logo.png" />
  </div>
</template>

<script>
export default {
  name: 'AsideLogo',
  methods: {
    backToDefaultPage () {
      this.$router.push({ name: 'Dashboard' }).catch(() => {})
    }
  }
}
</script>

<style lang="scss">
@import "@/style/main.scss";
.aside-logo {
  width: 280px;
  @include flex(row, center, center);
  > img {
    width: 220px;
    object-fit: cover;
    cursor: pointer;
    margin-bottom: 10px;
  }
}
</style>
