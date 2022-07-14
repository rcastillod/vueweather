<template>
    <div class="weather-wrapper">
        <!-- <video class="weather-video" autoplay muted loop id="myVideo">
          <source :src="require(``)" type="video/mp4">
        </video> -->
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
import WeatherData from './WeatherData.vue'

export default {
    name: 'weather-wrapper',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    //methods: {}
    // watch: {},
    components: {
        'weather-data': WeatherData
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped lang="scss">
.weather-wrapper {
    background-image: url('../../assets/images/weather-wrapper-bg.jpg');
    background-size: cover;
    border-radius: 50%;
    color: #ffffff;
    height: 25rem;
    width: 25rem;
    padding: .5rem;
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