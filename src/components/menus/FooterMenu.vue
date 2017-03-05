<template>
  <md-bottom-bar>
    <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
    <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
    <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
  </md-bottom-bar>
</template>

<style>
.md-bottom-bar {
  position: absolute !important;
  bottom: 0;
}
</style>

<script>
  export default {
    name: "footer-menu"
  }
</script>