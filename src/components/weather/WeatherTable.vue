<template>
    <v-data-table
    :headers="weatherHeaders"
    :items="weatherDetail"
    class="elevation-1"
    dark
    :hide-default-footer="true"
    :disable-sort="true"
    ></v-data-table>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'weather-table',
    // props: {},
    data: function(){
        return {
            weatherHeaders: [
                { text: 'Sensación Termica', value: "feels_like" },
                { text: 'Nivel del Suelo', value: "grnd_level" },
                { text: 'Humedad', value: "humidity" },
                { text: 'Presión', value: "pressure" },
                { text: 'Nivel del Mar', value: "sea_level" },
                { text: 'Temperatura', value: "temp" },
                { text: 'Temperatura Máxima', value: "temp_max" },
                { text: 'Temperatura Minima', value: "temp_min" }
            ],
            weatherDetailTable: []
        }
    },
    computed: {
        ...mapState(['weatherDetail', 'loader', 'location'])
    },
    methods: {
        ...mapActions(['getWeatherByCoords']),
        getLocation() {
            this.$store.state.loader = true
            navigator.geolocation.getCurrentPosition( 
                position => {
                    this.location.lat = position.coords.latitude
                    this.location.long = position.coords.longitude
                    this.getWeatherByCoords()
                })
        },
        addDetail() {
            this.weatherDetailTable = this.weatherDetail
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.getWeatherByCoords()
        this.addDetail()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
    .v-data-table {
        background-color: rgba(#14213D, .7) !important;
    }
</style>