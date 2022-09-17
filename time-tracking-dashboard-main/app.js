

Vue.createApp({
    data() {
      return {
        data:[
            {
              "title": "Work",
              "timeframes": {
                "daily": {
                  "current": 5,
                  "previous": 7
                },
                "weekly": {
                  "current": 32,
                  "previous": 36
                },
                "monthly": {
                  "current": 103,
                  "previous": 128
                }
              }
            },
            {
              "title": "Play",
              "timeframes": {
                "daily": {
                  "current": 1,
                  "previous": 2
                },
                "weekly": {
                  "current": 10,
                  "previous": 8
                },
                "monthly": {
                  "current": 23,
                  "previous": 29
                }
              }
            },
            {
              "title": "Study",
              "timeframes": {
                "daily": {
                  "current": 0,
                  "previous": 1
                },
                "weekly": {
                  "current": 4,
                  "previous": 7
                },
                "monthly": {
                  "current": 13,
                  "previous": 19
                }
              }
            },
            {
              "title": "Exercise",
              "timeframes": {
                "daily": {
                  "current": 1,
                  "previous": 1
                },
                "weekly": {
                  "current": 4,
                  "previous": 5
                },
                "monthly": {
                  "current": 11,
                  "previous": 18
                }
              }
            },
            {
              "title": "Social",
              "timeframes": {
                "daily": {
                  "current": 1,
                  "previous": 3
                },
                "weekly": {
                  "current": 5,
                  "previous": 10
                },
                "monthly": {
                  "current": 21,
                  "previous": 23
                }
              }
            },
            {
              "title": "Self Care",
              "timeframes": {
                "daily": {
                  "current": 0,
                  "previous": 1
                },
                "weekly": {
                  "current": 2,
                  "previous": 2
                },
                "monthly": {
                  "current": 7,
                  "previous": 11
                }
              }
            }
          ],
          work: {'current':4,'previous':33},
          play: {'current':4,'previous':33},
          study: {'current':4,'previous':33},
          excercise: {'current':4,'previous':33},
          social: {'current':4,'previous':33},
          selfcare: {'current':4,'previous':33}
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
        }
    }
  }).mount('#app')


