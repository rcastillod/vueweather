<template>
    <v-progress-circular
        v-if="loader"
        indeterminate
        color="rgba(255,255,255,.3)"
        width="2"
    ></v-progress-circular>
    <div class="data-grid" v-else>
        <div class="current-temperature">
            <div class="text-h2 font-weight-medium">{{ Math.floor(weatherData.main.temp) }}<span>°C</span></div>
            <div class="text-h6 font-weight-light">{{ weatherData.name }}</div>
        </div>
        <div class="min-temperature">
            <div class="d-flex flex-column">
                <div class="font-weight-black b-bottom">Min.</div>
                <div class="d-flex">
                    <v-icon
                        color="white"
                        class="text-caption mr-1">mdi-thermometer-minus</v-icon>
                    <span class="text-caption">{{weatherData.main.temp_min}}°</span>
                </div> 
            </div>
        </div>
        <div class="icon-temperature">
            <img width="90" :src="require(`../../assets/images/weather/${weatherData.weather[0].icon}.png`)" alt="Weather Icon">
        </div>
        <div class="max-temperature">
            <div class="d-flex flex-column">
                <div class="font-weight-black b-bottom">Max.</div>
                <div class="d-flex">
                    <v-icon
                        color="white"
                        class="text-caption mr-1">mdi-thermometer-plus</v-icon>
                    <span class="text-caption">{{weatherData.main.temp_max}}°</span>
                </div> 
            </div>
        </div>
        <div class="get-location" @click="getLocation()">
            <v-icon
                color="white">mdi-crosshairs</v-icon>
            <div class="text-caption font-weight-black">Localización Actual</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'weather-data',
    // props: {},
    data: function(){
        return {
            loader: true,
            weatherData: null,
            location: {
                lat: -33.6911475,
                long: -71.2193256
            },
            apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
            apiKey: 'c2eec385a5f70fd8ddc37e0037683545'
        }
    },
    // computed: {},
    methods: {
        getLocation() {
            navigator.geolocation.getCurrentPosition( 
                position => {
                    this.location.lat = position.coords.latitude
                    this.location.long = position.coords.longitude
                    this.getWeatherByCoords()
                })
        },
        async getWeatherByCoords() {
            try {
                let response = await fetch(`${this.apiUrl}?lat=${this.location.lat}&lon=${this.location.long}&appid=${this.apiKey}&units=metric`)
                if (!response.ok) throw ('Ocurrió un error al conectarse con la api')
                let data = await response.json()
                this.loader = false
                this.weatherData = data
            }
            catch(error) {
                console.log(error)
            }
        }
    },
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created() {
        this.getLocation()  
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
.v-progress-circular {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.data-grid {
    display: grid;
    height: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(3, 1fr);
    & > * {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
}
.current-temperature {
    grid-column: 2;
}
.min-temperature {
    grid-row: 2;
}
.icon-temperature {
    grid-column: 2;
    grid-row: 2;
}
.max-temperature {
    grid-column: 3;
    grid-row: 2;
}
.get-location {
    cursor: pointer;
    grid-column: 2;
    grid-row: 3;
}
.b-bottom {
    border-bottom: 1px solid rgba(#ffffff, .1);
}
</style>