<template>
    <md-sidenav class="md-left" ref="DashboardsMenu" v-on:click.native="close">
        <md-toolbar>
            <div class="md-toolbar-container">
                <h3 class="md-title">Dashboards</h3>
            </div>
        </md-toolbar>

        <md-list>
            <div v-for="db in dashboards" :key="db.Name">
                <md-list-item class="dashboard-item" v-on:click.native="selectDashboard(db.Name)">
                    <div class="md-list-text-container">
                        <span>{{db.Name}}</span>
                        <div class="dashboard-quick-values">
                            <md-icon md-iconset="fa fa-thermometer-three-quarters"></md-icon>23&deg;C
                            <md-icon>lightbulb_outline</md-icon>230
                        </div>
                    </div>
                    <md-ink-ripple />
                </md-list-item>
                <md-divider></md-divider>
            </div>

        </md-list>
    </md-sidenav>
</template>

<script>
import Vue from 'vue'
import DashboardService from '@/services/dashboard'

export default {
    name: 'dashboards-menu',
    data() {
        return {
            dashboards: {}
        }
    },
    methods: {
        toggle() {
            this.$refs.DashboardsMenu.toggle();
        },
        close() {
            this.$refs.DashboardsMenu.close();
        },
        selectDashboard(dashboardName) {
            this.$root.$emit('dashboard-selected', dashboardName)
        }
    },
    created() {
        var self = this
        DashboardService.getDashboards().then(function (data) {
            self.dashboards = data
        })
    }
}

</script>

<style>
.dashboard-quick-values {
    margin: 8px 0 !important;
}

.dashboard-quick-values .fa{
    font-size: 23px !important;
}

.dashboard-divider {
    margin-bottom: 8px !important;
}

.dashboard-item > .md-list-item-container {
    padding-top: 8px !important;
}
</style>