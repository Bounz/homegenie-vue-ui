<template>
  <div id="app" class="phone-viewport">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

    <md-toolbar>
      <md-button class="md-icon-button" v-on:click.native="toggleDashboardsMenu">
        <md-icon>menu</md-icon>
      </md-button>

      <md-button class="md-icon-button" v-on:click.native="toggleMainMenu">
        <md-icon>settings</md-icon>
      </md-button>

      <h2 class="md-title">Home Genie</h2>

      <div>
        <md-select name="language" id="language" v-model="lang">
          <md-option value="en">English</md-option>
          <md-option value="ru">Русский</md-option>
        </md-select>
      </div>
    </md-toolbar>

    <!-- <img src="./assets/logo.png"> -->
    <main-menu ref="MainMenu"></main-menu>
    <dashboards-menu ref="DashboardsMenu"></dashboards-menu>

    <router-view></router-view>

    <!--<footer-menu></footer-menu>-->
  </div>
</template>

<script>
  import MainMenu from '@/components/menus/MainMenu'
  import DashboardsMenu from '@/components/menus/DashboardsMenu'
  import FooterMenu from '@/components/menus/FooterMenu'
  import LocalizationService from '@/services/localization'
  import Vue from 'vue'

  export default {
    name: 'app',
    components: {
      MainMenu,
      DashboardsMenu,
      FooterMenu
    },
    data: function () {
      return {
        activeLang: 'en',
        get lang() {
          return LocalizationService.getLang()
        },
        set lang(lang) {
          this.activeLang = lang
          LocalizationService.setLang(lang)
        }
      }
    },
    methods: {
      toggleMainMenu() {
        this.$refs.MainMenu.toggle();
      },
      toggleDashboardsMenu() {
        this.$refs.DashboardsMenu.toggle();
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>