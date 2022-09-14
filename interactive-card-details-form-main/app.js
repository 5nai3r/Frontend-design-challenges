

Vue.createApp({
    data() {
      return {
        name: '',
        number: '',
        expY: '',
        expM:'',
        cvc:'',
        firstRun:true
      }
    },
    computed: {
        cvcValid(){
          if (this.firstRun) return true
          if(this.cvc.length === 3  && !isNaN(this.cvc)){return true}
        },
        expDateValid(){
          if (this.firstRun) return true
          if(this.expY.length == 2 && this.expM.length == 2 && !isNaN(this.expY) && !isNaN(this.expM) ){return true}
        },
        numberValid(){
          if (this.firstRun) return true
          const input = this.number.replace(/\s+/g, '')
          if(input.length == 16 && !isNaN(input)){return true}
        },
        nameValid(){
          if (this.firstRun) return true
          if (this.name.length != 0){ return true}
        },
        mmValid(){
          if (this.firstRun) return true
          if (this.expM.length == 2 && !isNaN(this.expM)) {return true}
        },
        yyValid(){
          if (this.firstRun) return true
          if (this.expY.length == 2 && !isNaN(this.expY)) {return true}
        },

        formValid(){
          return this.nameValid && this.numberValid && this.expDateValid && this.cvcValid
        }
    },
    methods: {
      formSubmit: function(){
        this.firstRun = false
        if (this.formValid) alert('Submit')
      }
    }
  }).mount('#app')


