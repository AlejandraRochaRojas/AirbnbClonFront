import { mapState } from 'vuex'

export default {
  data () {
    return {
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard', to: '/' },
        { title: 'About', icon: 'info', to: '/about' },
        { title: 'Login', icon: 'lock', to: '/login' }
      ]
    }
  },
  computed: {
    ...mapState({
      ui: (state) => state.ui
    })
  }
}
