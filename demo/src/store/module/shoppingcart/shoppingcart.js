import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getter'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

export default{
    namespaced:true,
    state,
    getters,
    actions,
    mutations,
}