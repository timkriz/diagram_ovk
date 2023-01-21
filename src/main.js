import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      currentTab: ""
    }
  },
  mutations: {
    changeValue(state, newValue) {
        state.currentTab = newValue
    }
  }
})


createApp(App).use(store).mount('#app')
