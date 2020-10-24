Vue.component('first-slider', {
    template: `
    <div class="swiper-wrapper">
        <swiper ref="firstSwiper"
            :options="firstSwiperOptions"
            class="swiper">
            <swiper-slide class="swiper-slide">
            <div>
            <first-slide></first-slide>
               <p @click="expandFirst">Подробнее</p>
    
               <transition name="fade">
               <div v-show="expandedFirst" style="position: absolute">
                  Скрытый текст
               </div>
               </transition>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
            <div>
            <second-slide></second-slide>
               <p @click="expandSecond">Подробнее</p>
    
               <transition name="fade">
               <div v-show="expandedSecond"style="position: absolute">
                  Скрытый текст
               </div>
               </transition>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide"> 
            <div>
            <third-slide></third-slide>
                <p @click="expandThird">Подробнее</p>
    
              <transition name="fade">
               <div v-show="expandedThird"style="position: absolute">
                  Скрытый текст
               </div>
               </transition>
               </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
    `,
    methods: {
        expandFirst() {
            this.expandedFirst = !this.expandedFirst
        },
        expandSecond() {
            this.expandedSecond = !this.expandedSecond
        },
        expandThird() {
            this.expandedThird = !this.expandedThird
        }
    },
    data: function () {
        return {
            expandedFirst: false,
            expandedSecond: false,
            expandedThird: false,
            firstSwiperOptions: {
                effect: 'coverflow',
                loop: true,
                preventClicksPropagation: false,
                slidesPerView: 3,
                spaceBetween: 30,
                preventClicks: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                initialSlide: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: false
                },
                touchStartPreventDefault: false,
                passiveListeners: false,
                coverflowEffect: {
                    rotate: 0,
                    stretch: 5,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true
                },
            }
        }
    }
})