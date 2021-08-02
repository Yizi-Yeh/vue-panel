<template>
  <div id="app">
     <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import '@/style/main.scss';
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  #app {
    height: 100vh;
    overflow: hidden;
  }
</style>
