<template>
    <div class="forecast-wrapper">
        <v-progress-circular
            v-if="loader"
            indeterminate
            color="rgba(255,255,255,.3)"
            width="2"
        ></v-progress-circular> 
        <ul v-else class="forecast px-0 mt-12">
            <li 
                v-for="(forecast, index) in weatherForecast"
                :key="index"
                class="forecast-item">
                <weather-day
                    :dt="weatherForecast[index].dt"
                    :temp="weatherForecast[index].temp"
                    :weather="weatherForecast[index].weather"
                ></weather-day>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import WeatherForecastDay from '@/components/weather/WeatherForecastDay.vue';

export default {
    name: 'weather-forecast',
    components: {
        'weather-day': WeatherForecastDay
    },
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['weatherForecast', 'loader'])
    },
    methods: {
        ...mapActions(['getWeatherForecast'])
    },
    created () {
        this.getWeatherForecast();
    },
}
</script>

<style scoped lang="scss">
    .forecast-wrapper {
        min-height: 9.375rem;
        position: relative;
    }
    .v-progress-circular {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .forecast {
        display: flex;
        gap: 1.25rem;
        list-style-type: none;
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        scroll-padding: 1.25rem;
        &::-webkit-scrollbar {
            width: 0;
        }
        &::-webkit-scrollbar-track {
            background: transparent;
        }
        &::-webkit-scrollbar-thumb {
            background: transparent;
            border: none;
        }
        &-item {
            scroll-snap-align: start;
        }
    }
</style>