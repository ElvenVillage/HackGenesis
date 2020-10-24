slidesMobile = 3
mobileHeight = 0
if (window.screen.availWidth <= 425) {
    slidesMobile = 1
    mobileHeight = window.screen.availHeight
}
Vue.component('first-slider', {
    template: `
    <div class="swiper-wrapper">
        <swiper ref="firstSwiper"
            :options="firstSwiperOptions"
            class="swiper">
                <swiper-slide class="swiper-slide" ${(mobileHeight != 0) ? 'style="height:' + mobileHeight + 'px"' : ''}>
                <div v-bind:class="{'expanded-two-columns': expandedFirst}">
                  <div>
                    <first-slide @click.native="expandFirst" :class="{'left-column-before': !expandedFirst}"></first-slide>
                  </div>
                 <div>
                    <transition name="slide-fade">
                    <div v-show="expandedFirst">
                      <ul>
                        <li>Ежедневная прибыль 3%</li>
                        <li>Вывод прибыли: в любое время</li>
                        <li>Тело депозита: возвращается</li>
                        <li>Минимальная сумма: нет</li>
                      </ul>
                     <div style="margin-top: 20px">
                         <button class="button">Выбрать</button>
                     </div>
                    </div>
                    </transition>
                   </div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" ${(mobileHeight != 0) ? 'style="height:' + mobileHeight + 'px"' : ''}>
            <div v-bind:class="{'expanded-two-columns': expandedSecond}">
            <div>
            <second-slide @click.native="expandSecond" :class="{'left-column-before': !expandedSecond}"></second-slide>
               
            </div><div>
               <transition name="slide-fade">
               <div v-show="expandedSecond">
                  <ul>
                        <li>Ежедневная прибыль 3%</li>
                        <li>Вывод прибыли: в любое время</li>
                        <li>Тело депозита: возвращается</li>
                        <li>Минимальная сумма: нет</li>
                      </ul>
                     <div style="margin-top: 20px">
                         <button class="button">Выбрать</button>
                     </div>
               </div>
               </transition></div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" ${(mobileHeight != 0) ? 'style="height:' + mobileHeight + 'px"' : ''}> 
            <div v-bind:class="{'expanded-two-columns': expandedThird}">
            <div>
            <third-slide :class="{'left-column-before': !expandedThird}" @click.native="expandThird"></third-slide>
            
            </div><div>
              <transition name="slide-fade">
               <div v-show="expandedThird">
               <ul>
                        <li>Ежедневная прибыль 3%</li>
                        <li>Вывод прибыли: в любое время</li>
                        <li>Тело депозита: возвращается</li>
                        <li>Минимальная сумма: нет</li>
                      </ul>
                     <div style="margin-top: 20px">
                         <button class="button">Выбрать</button>
                     </div>
               </div>
               </transition></div>
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
                slidesPerView: slidesMobile,
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
                    rotate: 10,
                    stretch: 1,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false
                },
            }
        }
    }
})