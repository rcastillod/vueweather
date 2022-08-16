<template>
    <div class="weather-wrapper">
        <video class="weather-video" autoplay muted loop id="myVideo" :src="getWeatherVideo"></video>
        <div class="bg-wrapper">
            <div class="cardinales text-caption">N</div>
            <div class="cardinales text-caption">O</div>
            <div class="cardinales text-caption">S</div>
            <div class="cardinales text-caption">E</div>
            <div class="inner-wrapper">
                <weather-data></weather-data>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import WeatherData from './WeatherData.vue'

export default {
    name: 'weather-wrapper',
    data: function(){
        return {
            iconName: null
        }
    },
    computed: {
        ...mapState(['weatherData', 'loader']),
        getWeatherVideo() {
            let videoSrc = null
            if ( this.loader == true ) {
                videoSrc = `${require('@/assets/videos/weather-videos/01d.mp4')}`
            } else {
                videoSrc = `${require('@/assets/videos/weather-videos/'+this.weatherData.weather[0].icon+'.mp4')}`
            }
            return videoSrc
        }
    },
    methods: {},
    components: {
        'weather-data': WeatherData
    }
}
</script>

<style scoped lang="scss">
.weather-wrapper {
    background-size: cover;
    border-radius: 50%;
    color: #ffffff;
    height: 18.75rem;
    width: 18.75rem;
    overflow: hidden;
    padding: .5rem;
    position: relative;
    @media ( min-width: 410px ) {
        height: 25rem;
        width: 25rem;
    }
    .weather-video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
}
.bg-wrapper {
    background-color: rgba(#14213D, .7);
    border-radius: inherit;
    height: 100%;
    width: 100%;
    padding: 1.875rem;
    position: relative;
    .cardinales {
        position: absolute;
        &:nth-child(1) {
            top: 10px;
            left: 50%;
            transform: translateX(-50%)
        }
        &:nth-child(2) {
            top: 50%;
            left: 15px;
            transform: translateY(-50%)
        }
        &:nth-child(3) {
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%)
        }
        &:nth-child(4) {
            top: 50%;
            right: 15px;
            transform: translateY(-50%)
        }
    }

}
.inner-wrapper {
    border: 1px solid rgba(#ffffff, .2);
    border-radius: inherit;
    height: 100%;
    width: 100%;
    position: relative;
}
</style>