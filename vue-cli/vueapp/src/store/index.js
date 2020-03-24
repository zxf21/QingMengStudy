import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    color: '#fd4d4d',
    title: '电影'
  },
  mutations: {
    change(state,obj){
      state.color = obj.color;
      state.title = obj.title;
    }
  },
  actions: {
  },
  modules: {
  }
})
