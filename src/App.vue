<template>
  <v-app>
    <navigation-menu></navigation-menu>
    <v-main>
      <div class="main-wrapper">
        <router-view/>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from '@/components/header/Navigation.vue';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    'navigation-menu': Navigation
  }
};
</script>
