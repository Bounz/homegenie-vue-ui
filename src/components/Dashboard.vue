<template>
  <div>
    <!-- # top title -->
    <div># </div>

    <!-- # widgets list -->
    <div>

    <div v-for="module in dashboard.Modules" >
        <md-whiteframe md-elevation="2" class="widgetWrapper">
          {{module.Domain}} {{module.Address}}
        </md-whiteframe>
      </div>
      
    </div>

    <!-- # action buttons -->
    <div>
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
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import DashboardService from '@/services/dashboard'

  export default {
    data: function () {
      return {
        dashboards: {},
        dashboard: {}
      }
    },
    created() {
      var self = this
      DashboardService.getDashboards().then(function (data) {
        self.dashboards = data
      })
      this.$root.$on('dashboard-selected', function (name) {
        //alert(name)
        self.dashboard = DashboardService.getDashboard(name)
      })
    }
  }

</script>

<style>
.widgetWrapper {
  height: 100px;
  margin-left: 8px;
  margin-bottom: 8px;
  float: left;
}
  </style>