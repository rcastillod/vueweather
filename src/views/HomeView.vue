<template>
  <section class="home page">
    <weather-wrapper></weather-wrapper>
  </section>
</template>

<script>
import WeatherWrapper from '@/components/weather/WeatherWrapper.vue'

export default {
  name: 'home-view',
  components: {
    'weather-wrapper': WeatherWrapper
  },
}
</script>

<style lang="scss">

</style>

