<template>
  <v-app>
    <navigation-menu></navigation-menu>
    <v-main>
      <div class="main-wrapper" :style="getWeatherImage">
        <v-container class="fill-height justify-sm-center">
          <router-view/>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import Navigation from '@/components/header/Navigation.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    'navigation-menu': Navigation
  },
  computed: {
    ...mapState(['weatherData', 'loader']),
    getWeatherImage() {
      let image = null
      if ( this.loader == true ) {
        image = {backgroundImage: `url(${require('@/assets/images/main-bg.jpg')})`}
      } else {
        image = {backgroundImage: `url(${require('@/assets/images/weather-images/'+this.weatherData.weather[0].icon+'.jpg')})`}
      }
      return image
    }
  }
};
</script>
<style lang="scss">
.main-wrapper {
  background-image: url('./assets/images/main-bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100%;
}
</style>