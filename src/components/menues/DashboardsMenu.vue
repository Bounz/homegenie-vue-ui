<template>
    <md-sidenav class="md-left" ref="rightSidenav" v-on:open="open('Right')" v-on:close="close('Right')">
        <md-toolbar>
            <div class="md-toolbar-container">
                <h3 class="md-title">Sidenav content</h3>
            </div>
        </md-toolbar>

        <md-button class="md-raised md-accent" v-on:click.native="closeRightSidenav">Close</md-button>
    </md-sidenav>
</template>

<script>
export default {
    name: 'dashboards-menu',
    data () {
        return {
            open(ref) {
                console.log('Opened: ' + ref);
            },
            close(ref) {
                console.log('Closed: ' + ref);
            }
        }
    }
}
</script>