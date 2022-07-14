<template>
    <div class="overflow-hidden" justify="space-between">
        <v-app-bar 
            color="transparent" 
            light 
            absolute
            flat
            >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

            <v-toolbar-title>TiempoApp</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute bottom temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item>
                        <v-list-item-title>Foo</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Bar</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Fizz</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>Buzz</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'navigation-menu',
    // props: {},
    data: function(){
        return {
            drawer: false,
            group: null,
        }
    },
    watch: {
        group () {
            this.drawer = false
        },
    },
    // computed: {},
    //methods: {}
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">

</style>