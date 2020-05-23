import Vuex from 'vuex'
import Axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      allData: []
    },
    mutations: {
      fetchAllData (state, allData) {
        state.allData = allData
      }
    },
    actions: {
      fetchAll ({ commit }) {
        Axios.get('http://www.mocky.io/v2/5e8465c23000008400cf4395')
          .then(res => res.data)
          .then((allData) => { commit('fetchAllData', allData) })
          .catch(error => console.log(error))
      }
    },
    getters: {}
  })
}

export default createStore
