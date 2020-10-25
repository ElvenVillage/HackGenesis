Vue.use(VueAwesomeSwiper)
Vue.use(VueFullpage)

MASTERKEY = 0

new Vue({
    el: '#app',
    data: {
        opts: {
            start: 0,
            dir: 'v',
            beforeChange: function (prev, next) {
            console.log('before', prev, next)
          },
        }
    }
})