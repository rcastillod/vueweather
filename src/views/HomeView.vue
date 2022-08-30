<template>
  <section class="home page">
    <weather-wrapper></weather-wrapper>
    <weather-forecast></weather-forecast>
  </section>
</template>

<script>
import WeatherWrapper from '@/components/weather/WeatherWrapper.vue'
import WeatherForecast from '@/components/weather/WeatherForecast.vue';

export default {
  name: 'home-view',
  components: {
    'weather-wrapper': WeatherWrapper,
    'weather-forecast': WeatherForecast
  },
}
</script>

<style lang="scss">

</style>

