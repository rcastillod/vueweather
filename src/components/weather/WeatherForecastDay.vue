<template>
    <div class="forecast-day d-flex flex-column">
        <div class="name font-weight-bold">{{getDayName.slice(0, 3)}}</div>
        <div class="icon">
            <img :src="require(`../../assets/icons/weather-icons/${weather[0].icon}.png`)" alt="Weather Icon" />
        </div>
        <div class="temperature d-flex justify-space-between">
            <div class="min">
                <span class="text-body2">{{ roundTempMin }}°</span>
            </div> 
            <div class="max">
                <span class="text-body2">{{ roundTempMax }}°</span>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'weather-day',
    props: {
        dt: {
            type: Number,
            required: true
        },
        temp: {
            type: Object,
            required: true
        },
        weather: {
            type: Array,
            required: true
        }
    },
    data: function(){
        return {
            days: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
        }
    },
    computed: {
        getDay() {
            return new Date(this.dt*1000).getDay()
        },
        getDayName() {
            return this.days[this.getDay]
        },
        roundTempMin() {
            return Math.floor(this.temp.min)
        },
        roundTempMax() {
            return Math.floor(this.temp.max)
        }
    },
}
</script>

<style scoped lang="scss">
    .forecast-day {
        border: 1px solid rgba(#ffffff, .2);
        border-radius: .625rem;
        background-color: rgba(#14213D, .7);
        backdrop-filter: blur(5px);
        color: #ffffff;
        gap: .9375rem;
        padding: .625rem .9375rem;
        text-align: center;
        width: 6.25rem;
    }
    .name {
        text-transform: uppercase;
    }
    .icon {
        img {
            width: 2.5rem;
        }
    }
</style>