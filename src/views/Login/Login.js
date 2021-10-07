export default {
  data: () => ({
    form: {
      email: '',
      password: '',
      error: false,
      dialog: false,
      isModalVisible: false
    },
    passwordShow: true
  }),
  methods: {
    login () {
      // alert('Estas logueado perro! 😎')
      console.log(this.email)
      console.log(this.password)
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
