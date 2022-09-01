<template>
    <div class="forecast-wrapper">
        <ul class="forecast px-0 mt-12">
            <li 
                v-for="(forecast, index) in weatherForecast"
                :key="index"
                class="forecast-item">
                <v-skeleton-loader
                v-if="loader"
                    v-bind="attrs"
                    class="mx-auto"
                    min-height='147'
                    type="text, avatar, text, text"
                    elevation="2"
                ></v-skeleton-loader>
                <weather-day
                v-else
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

<style lang="scss">
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
    .v-skeleton-loader {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        padding-inline: .625rem;
        &__text {
            &:nth-child(1) { grid-column: 2 / 3; }
            &:nth-child(3) { grid-column: 1 / 2; }
            &:nth-child(4) { grid-column: 3 / 4; }
        }
        &__avatar {
            grid-column: 1 / -1;
            justify-self: center;
        }
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