export default {
  data: () => ({
    form: {
      email: '',
      password: ''
    },
    passwordShow: true
  }),
  methods: {
    login () {
      // alert('Estas logueado perro! 😎')
      this.$router.push('/')
    },
    clearForm () {
      this.form = {
        email: '',
        password: ''
      }
    }
  }
}
