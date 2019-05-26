import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'
Vue.use(createPersistedState)

export default ({store}) => {
    createPersistedState({
        paths: ['loginStore','postStore']
    })(store)
}