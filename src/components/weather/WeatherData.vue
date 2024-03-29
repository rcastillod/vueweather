<template>
    <v-progress-circular
        v-if="loader"
        indeterminate
        color="rgba(255,255,255,.3)"
        width="2"
    ></v-progress-circular>
    <div class="data-grid" v-else>
        <div class="current-temperature">
            <div class="text-h4 text-sm-h2 font-weight-medium">{{ roundTemp }}<span>°C</span></div>
            <div class="text-subtitle-1 text-sm-h6 font-weight-light">{{ weatherData.name }}</div>
        </div>
        <div class="min-temperature">
            <div class="d-flex flex-column">
                <div class="font-weight-black b-bottom">Min.</div>
                <div class="d-flex">
                    <v-icon
                        color="white"
                        class="text-caption mr-1">mdi-thermometer-minus</v-icon>
                    <span class="text-caption">{{ roundTempMin }}°</span>
                </div> 
            </div>
        </div>
        <div class="icon-temperature">
            <img :src="require(`../../assets/icons/weather-icons/${weatherData.weather[0].icon}.png`)" alt="Weather Icon">
        </div>
        <div class="max-temperature">
            <div class="d-flex flex-column">
                <div class="font-weight-black b-bottom">Max.</div>
                <div class="d-flex">
                    <v-icon
                        color="white"
                        class="text-caption mr-1">mdi-thermometer-plus</v-icon>
                    <span class="text-caption">{{ roundTempMax }}°</span>
                </div> 
            </div>
        </div>
        <div class="get-location" @click="getLocation()">
            <v-icon
                color="white">mdi-crosshairs</v-icon>
            <div class="text-caption font-weight-black text-center">Localización Actual</div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
    name: 'weather-data',
    data: function(){
        return {
            
        }
    },
    computed: {
        ...mapState(['weatherData', 'loader', 'location']),
        roundTemp() {
            return Math.floor(this.weatherData.main.temp)
        },
        roundTempMin() {
            return Math.floor(this.weatherData.main.temp_min)
        },
        roundTempMax() {
            return Math.floor(this.weatherData.main.temp_max)
        }
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
    },
    created() {
        this.getWeatherByCoords()
    }
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
    img {
        width: 3.75rem;
        @media ( min-width: 600px ) {
            width: 5.625rem;
        }
    }
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