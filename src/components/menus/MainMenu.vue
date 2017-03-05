<template>
    <md-sidenav class="md-left" ref="mainMenuSidenav" v-on:click.native="close">
        <md-toolbar>
            <div class="md-toolbar-container">
                <h3 class="md-title">Sidenav content</h3>
            </div>
        </md-toolbar>
        <md-list>
            <md-list-item>
                <md-icon>view_module</md-icon>
                <span>{{ $t("MainMenu.Groups") }}</span>
                <md-ink-ripple></md-ink-ripple>
            </md-list-item>

            <md-subheader>{{ $t("MainMenu.Automatisation") }}</md-subheader>

            <md-list-item>
                <router-link to="/foo">
                    <md-icon>schedule</md-icon><span>{{ $t("MainMenu.Schedule") }}</span></router-link>
            </md-list-item>
            <md-list-item>
                <router-link to="/foo">
                    <md-icon>code</md-icon><span>{{ $t("MainMenu.Programs") }}</span></router-link>
            </md-list-item>
            <md-list-item>
                <router-link to="/foo">
                    <md-icon>widgets</md-icon><span>{{ $t("MainMenu.Widgets") }}</span></router-link>
            </md-list-item>

            <md-divider></md-divider>

            <md-subheader>Система</md-subheader>

            <md-list-item>
                <router-link to="/foo">
                    <md-icon>settings</md-icon><span>Настройки</span></router-link>
            </md-list-item>
            <md-list-item>
                <router-link to="/foo">
                    <md-icon>build</md-icon><span>Обслуживание</span></router-link>
            </md-list-item>

            <md-divider></md-divider>

            <md-subheader>О программе</md-subheader>
            <md-list-item>
                <router-link to="/about"><md-icon>info_outline</md-icon><span>О HomeGenie</span></router-link>
            </md-list-item>
            <md-list-item href="https://genielabs.github.io/HomeGenie/walkthrough.html" target="_blank">
                <md-icon>book</md-icon><span>Руководство пользователя</span>
            </md-list-item>
            <md-list-item href="http://genielabs.github.io/HomeGenie/about.html" target="_blank">
                <md-icon>book</md-icon><span>Руководство по разработке</span>
            </md-list-item>
            <md-list-item href="http://www.homegenie.it/forum/" target="_blank">
                <md-icon>book</md-icon><span>Форум для пользоватей</span>
            </md-list-item>
            <md-list-item href="http://www.homegenie.it/keepuphg.php" target="_blank">
                <md-icon>book</md-icon><span>Поддержите HomeGenie</span>
            </md-list-item>
        </md-list>
    </md-sidenav>
</template>

<script>
    export default {
        name: 'main-menu',
        data() {
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