Vue.component('first-slider', {
    template: `
    <div class="swiper-wrapper">
        <swiper ref="firstSwiper"
            :options="firstSwiperOptions"
            class="swiper">
            <swiper-slide class="swiper-slide">
            <div>
               <p @click="expandFirst">Подробнее</p>
    
               <div v-show="expandedFirst">
                  Скрытый текст
               </div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
            <div>
               <p @click="expandSecond">Подробнее</p>
    
               <div v-show="expandedSecond">
                  Скрытый текст
               </div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide"> 
            <div>
                <p @click="expandThird">Подробнее</p>
    
               <div v-show="expandedThird">
                  Скрытый текст
               </div>
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