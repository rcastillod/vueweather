import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherData: {},
    weatherDetail: [],
    weatherForecast: [],
    loader: true,
    location: {
      lat: -33.6911475,
      long: -71.2193256
    },
    apiUrl: 'https://api.openweathermap.org/data/2.5/',
    apiKey: 'c2eec385a5f70fd8ddc37e0037683545'
  },
  getters: {
  },
  mutations: {
    ADD_DATA(state, data) {
      state.weatherData = data
    },
    ADD_DATA_DETAIL(state, dataDetail) {
      state.weatherDetail.push(dataDetail)
    },
    ADD_DATA_FORECAST( state, data ) {
      state.weatherForecast = data
    }
  },
  actions: {
    async getWeatherByCoords({ commit }) {
      try {
        let response = await fetch(`${this.state.apiUrl}weather?lat=${this.state.location.lat}&lon=${this.state.location.long}&appid=${this.state.apiKey}&units=metric`)
        if (!response.ok) throw ('Ocurrió un error al conectarse con la api')
        
        let data = await response.json()
        let { main } = data
        
        this.state.loader = false
        
        commit('ADD_DATA', data)
        commit('ADD_DATA_DETAIL', main)
      }
      catch (error) {
        console.log(error)
      }
    },
    async getWeatherForecast({ commit }) {
      try {
        let response = await fetch(`${this.state.apiUrl}forecast?lat=${this.state.location.lat}&lon=${this.state.location.long}&cnt=4&appid=${this.state.apiKey}&units=metric`)
        if ( !response.ok ) throw ('Ocurrió un error al conectarse con la api')

        let data = await response.json()
        let dataList = data.list

        commit('ADD_DATA_FORECAST', dataList)

      }
      catch(error) {
        console.log(error)
      }
    }
  },
  modules: {
  }
})
