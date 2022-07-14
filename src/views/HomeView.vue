<template>
  <section class="home">
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
.home {
  background-image: url('../assets/images/main-bg.jpg');
  background-size: cover;
  background-position: center;
  display: grid;
  height: 100vh;
  place-items: center;
}
</style>

