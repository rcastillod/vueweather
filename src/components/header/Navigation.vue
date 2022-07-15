<template>
    <div class="overflow-hidden" justify="space-between">
        <v-app-bar
            color="transparent"
            light 
            absolute
            flat
            >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title @click="$router.push('/')">Cloudapp</v-toolbar-title>
            <v-spacer></v-spacer>
            <about-dialog></about-dialog>
        </v-app-bar>
        <v-navigation-drawer 
        v-model="drawer" 
        src="../../assets/images/drawer-bg.jpg"
        absolute 
        bottom 
        temporary>
            <v-list  
            dense>
                <div class="drawer-title">Cloudapp</div>
                <v-list-item-group 
                v-model="group"
                class="font-weight-bold" 
                active-class="blue--text text--lighten-5">
                    <v-list-item to="/">
                        <v-list-item-title class="text-subtitle-1 font-weight-medium">Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item to="/detalle">
                        <v-list-item-title class="text-subtitle-1 font-weight-medium">Detalle</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import AboutDialog from '@/components/AboutDialog.vue'

export default {
    name: 'navigation-menu',
    data: function(){
        return {
            drawer: false,
            group: null,
        }
    },
    components: {
        'about-dialog': AboutDialog
    },
    watch: {
        group () {
            this.drawer = false
        },
    },
}
</script>

<style scoped lang="scss">
.v-app-bar {
    backdrop-filter: blur(5px);
}
.v-toolbar__title {
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
    text-transform: uppercase;
}
.drawer-title {
    color: #ffffff;
    padding: 1rem;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
}
</style>