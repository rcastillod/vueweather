<template>
    <section class="detail page">
        <v-container>
            <v-row>
                <v-col
                cols="12">
                    <weather-table></weather-table>
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
import WeatherTable from '@/components/weather/WeatherTable.vue'

export default {
    name: 'detail-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'weather-table': WeatherTable
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>