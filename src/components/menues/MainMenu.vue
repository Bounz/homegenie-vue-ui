<template>
    <md-sidenav class="md-left" ref="mainMenuSidenav" v-on:click.native="close">
        <md-toolbar>
            <div class="md-toolbar-container">
                <h3 class="md-title">Sidenav content</h3>
            </div>
        </md-toolbar>
        <md-list>
            <md-list-item class="has-ripple">
                {{ $t("MainMenu.Groups") }}
                <md-ink-ripple></md-ink-ripple>
            </md-list-item>

            <md-subheader>{{ $t("MainMenu.Automatisation") }}</md-subheader>
                
            <md-list-item>
                <router-link to="/foo">{{ $t("MainMenu.Schedule") }}</router-link>
            </md-list-item>
            <md-list-item>
                <router-link to="/foo">{{ $t("MainMenu.Programs") }}</router-link>
            </md-list-item>
            <md-list-item>
                <router-link to="/foo">{{ $t("MainMenu.Widgets") }}</router-link>
            </md-list-item>

            <md-divider></md-divider>

            <md-subheader>Система</md-subheader>
            
            <md-list-item>
                <router-link to="/foo">Настройки</router-link>
            </md-list-item>
            <md-list-item>
                <router-link to="/foo">Обслуживание</router-link>
            </md-list-item>

            <md-divider></md-divider>

            <md-list-item>
                <router-link to="/foo">Go to Foo</router-link>
            </md-list-item>
            <md-list-item>
                <router-link to="/bar">Go to Bar</router-link>
            </md-list-item>
        </md-list>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt
            ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis
            iusto!</p>
    </md-sidenav>
</template>

<script>

  export default {
    name: 'main-menu',
    data () {
      return {
        
      }
    },
    methods: {
      toggle() {
        console.log('Toggled');
        this.$refs.mainMenuSidenav.toggle();
      },
      close() {
        this.$refs.mainMenuSidenav.close();
      }
    }
  }

</script>

<style>
.list-item-header {
    background: #d4d4d4;
}
</style>