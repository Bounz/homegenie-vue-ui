<template>
  <div id="app" class="phone-viewport">
    <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
    <link rel="stylesheet" href="//fonts.googleapis.com/icon?family=Material+Icons">

    <md-toolbar>
        <md-button class="md-icon-button" v-on:click.native="toggleMenu">
            <md-icon>menu</md-icon>
        </md-button>

        <md-button class="md-icon-button" v-on:click.native="toggleRightSidenav">
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

    <img src="./assets/logo.png">
    <main-menu ref="mm1"></main-menu>
    <router-view></router-view>

    <md-speed-dial md-mode="scale" class="md-fab-bottom-right">
      <md-button class="md-fab" md-fab-trigger>
        <md-icon md-icon-morph>close</md-icon>
        <md-icon>share</md-icon>
      </md-button>

      <md-button class="md-fab md-mini md-clean">
        <md-icon>email</md-icon>
      </md-button>

      <md-button class="md-fab md-mini md-clean">
        <md-icon>content_copy</md-icon>
      </md-button>
    </md-speed-dial>

    <footer-menu></footer-menu>
  </div>
</template>

<script>
  import MainMenu from '@/components/menues/MainMenu'
  import DashboardsMenu from '@/components/menues/DashboardsMenu'
  import FooterMenu from '@/components/menues/FooterMenu'
  import LocalizationService from '@/services/localization'
  import Vue from 'vue'


  export default {
    name: 'app',
    components: {
      MainMenu,
      DashboardsMenu,
      FooterMenu
    },
    data: function(){
      return {
        activeLang: 'en',
        get lang() {
          //return this.activeLang
          return LocalizationService.getLang()
        },
        set lang(lang) {
          this.activeLang = lang
          LocalizationService.setLang(lang)
          // Vue.locale(lang, function () {
          //   return LocalizationService.loadLocale(lang)
          // }, function () {
          //   Vue.config.lang = lang
          // })
        },
        toggleLeftSidenav() {
           MainMenu.toggle();
        },
        toggleRightSidenav() {
            this.$refs.rightSidenav.toggle();
        },
        closeRightSidenav() {
            this.$refs.rightSidenav.close();
        }
      }
    },
    methods: {
      toggleMenu() { 
        this.$refs.mm1.toggle();
      }
    },
    created (){
      //this.lang = 'ru'
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