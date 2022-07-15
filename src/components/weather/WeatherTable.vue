<template>
    <v-data-table
    :headers="weatherHeaders"
    :items="weatherDetail"
    :items-per-page="1"
    class="elevation-1"
    ></v-data-table>
</template>

<script>
import { mapState } from 'vuex'

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
            weatherDetail: []
        }
    },
    computed: {
        ...mapState(['apiData'])
    },
    methods: {
        getLocation() {
            this.loader = true
            navigator.geolocation.getCurrentPosition( 
                position => {
                    this.apiData.location.lat = position.coords.latitude
                    this.apiData.location.long = position.coords.longitude
                    this.getWeatherDetail()
                })
        },
        async getWeatherDetail() {
            try {
                let response = await fetch(`${this.apiData.apiUrl}?lat=${this.apiData.location.lat}&lon=${this.apiData.location.long}&appid=${this.apiData.apiKey}&units=metric`)
                if (!response.ok) throw ('Ocurrió un error al conectarse con la api')
                let data = await response.json()
                let { main } = data
                this.loader = false
                this.weatherDetail.push(main)
            }
            catch(error) {
                console.log(error)
            }
        },
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        //this.getLocation()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>