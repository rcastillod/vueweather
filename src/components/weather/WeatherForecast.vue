<template>
    <div>
        hola
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
    name: 'weather-forecast',
    data: function(){
        return {}
    },
    computed: {
        ...mapState(['weatherForecast'])
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
    
</style>