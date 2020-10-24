slidesMobile = 3
mobileHeight = 0
if (window.screen.availWidth <= 425) {
    slidesMobile = 1
    mobileHeight = window.screen.availHeight
}
Vue.component('first-slider', {
    template: `
    <div class="swiper-wrapper" >
        <swiper ref="firstSwiper"
            :options="firstSwiperOptions"
            class="swiper">
                <swiper-slide class="swiper-slide" ${(mobileHeight != 0) ? 'style="height:' + mobileHeight + 'px"' : ''}>
                <div v-bind:class="{'expanded-two-columns': expandedFirst}">
                  <div>
                    <first-slide @click.native="expandFirst" :class="{'left-column-before': !expandedFirst}"></first-slide>
                  </div>
                 <div>
                    <article name="slide-fade">
                    <div v-show="expandedFirst">
                      <ul class="dot">
                        <li class="dot">Ежедневная прибыль 3%</li>
                        <li class="dot">Вывод прибыли: в любое время</li>
                        <li class="dot">Тело депозита: возвращается</li>
                        <li class="dot">Минимальная сумма: нет</li>
                        <div style="margin-top: 20px">
                         <button class="button">Выбрать</button>
                     </div>
                      </ul>
                 
                    </div>
                    </article>
                   </div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" ${(mobileHeight != 0) ? 'style="height:' + mobileHeight + 'px"' : ''}>
            <div v-bind:class="{'expanded-two-columns': expandedSecond}">
            <div>
            <second-slide @click.native="expandSecond" :class="{'left-column-before': !expandedSecond}"></second-slide>
               
            </div><div>
               <article name="slide-fade">
               <div v-show="expandedSecond">
                  <ul class="dot" style="background-color: white; color: black">
                        <li class="dot">Ежедневная прибыль 3%</li>
                        <li class="dot">Вывод прибыли: в любое время</li>
                        <li class="dot">Тело депозита: возвращается</li>
                        <li class="dot">Минимальная сумма: нет</li>
                        <div style="margin-top: 20px">
                         <button class="button">Выбрать</button>
                     </div>
                      </ul>
                    
               </div>
               </article></div>
               </div>
            </swiper-slide>
            <swiper-slide class="swiper-slide" ${(mobileHeight != 0) ? 'style="height:' + mobileHeight + 'px"' : ''}> 
            <div v-bind:class="{'expanded-two-columns': expandedThird}">
            <div>
            <third-slide :class="{'left-column-before': !expandedThird}" @click.native="expandThird"></third-slide>
            
            </div><div>
              <article name="slide-fade">
               <div v-show="expandedThird">
               <ul class="dot"style="background-color: white; color: black">
                        <li class="dot">Ежедневная прибыль 3%</li>
                        <li class="dot">Вывод прибыли: в любое время</li>
                        <li class="dot">Тело депозита: возвращается</li>
                        <li class="dot">Минимальная сумма: нет</li>
                        <div style="margin-top: 20px">
                         <button class="button">Выбрать</button>
                     </div>
                      </ul>
                     
               </div>
               </article></div>
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
                on: {
                  'slideChange':  () => {
                      const currentIndex = this.$refs.firstSwiper.$swiper.realIndex
                      this.expandedFirst = false; this.expandedSecond = false; this.expandedThird = false
                      if (currentIndex === 0) this.expandedSecond = true
                      if (currentIndex === 1) this.expandedThird = true
                      if (currentIndex === 2) this.expandedFirst = true
                  }
                },
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
                    rotate: 0,
                    stretch: -100,
                    depth: 300,
                    modifier: 3,
                    slideShadows: true
                },
            }
        }
    }
})