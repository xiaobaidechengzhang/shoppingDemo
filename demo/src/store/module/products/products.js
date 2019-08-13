import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import state from './state'
import getters from './getter'

Vue.use(Vuex)



export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}
