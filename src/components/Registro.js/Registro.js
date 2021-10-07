export default {
  data: () => ({
    email: '',
    password: '',
    passwordRepeat: ''
  }),
  methods: {
    register () {
      console.log(this.email)
      console.log(this.password)
      console.log(this.passwordRepeat)
    }
  }
}
