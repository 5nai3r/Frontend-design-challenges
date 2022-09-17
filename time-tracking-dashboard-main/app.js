
Vue.createApp({
    data() {
      return {
        data:[],
          work: {'current':32,'previous':36},
          play: {'current':10,'previous':8},
          study: {'current':4,'previous':7},
          excercise: {'current':4,'previous':5},
          social: {'current':5,'previous':10},
          selfcare: {'current':2,'previous':2},
          previousLabel: 'Last Week'
      }
    },
    methods: {
        update: function(s){
            this.work.current = this.data[0]['timeframes'][s].current
            this.work.previous = this.data[0]['timeframes'][s].previous

            this.play.current = this.data[1]['timeframes'][s].current
            this.play.previous = this.data[1]['timeframes'][s].previous

            this.study.current = this.data[2]['timeframes'][s].current
            this.study.previous = this.data[2]['timeframes'][s].previous

            this.excercise.current = this.data[3]['timeframes'][s].current
            this.excercise.previous = this.data[3]['timeframes'][s].previous

            this.social.current = this.data[4]['timeframes'][s].current
            this.social.previous = this.data[4]['timeframes'][s].previous

            this.selfcare.current = this.data[5]['timeframes'][s].current
            this.selfcare.previous = this.data[5]['timeframes'][s].previous

            if (s == 'daily') this.previousLabel ='Yesterday'
            if (s == 'weekly') this.previousLabel ='Last Week'
            if (s == 'monthly') this.previousLabel ='Last Month'
        }
    },
    mounted(){
        fetch("data.json")
            .then(res => res.json())
            .then(data => this.data = data)
    }
  }).mount('#app')


