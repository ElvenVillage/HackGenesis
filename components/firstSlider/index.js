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
                <swiper-slide 
                     class="swiper-slide" ${(mobileHeight != 0) ? 'style="height:' + mobileHeight + 'px"' : ''}
                     v-for="(product, idx) in investProducts[0]" :key="idx">
                <div v-bind:class="{'expanded-two-columns': expanded[idx]}">
                  <div>
                    <first-slide @click.native="expand(idx)" 
                                 :class="{'left-column-before': !expanded[idx]}"
                                 :imgsrc="product.imgsrc"
                                 :title="product.title"
                                 :key="idx"></first-slide>
                  </div>
                 <div>
                    <article name="slide-fade">
                    <div v-show="expanded[idx]">
                      <ul class="dot">
                        <li class="dot" v-for="(dotInput, dotIndex) in product.description"
                         :key="dotIndex">
                            {{ dotInput }}
                        </li>
                        <div style="margin-top: 20px">
                         <button class="button">Выбрать</button>
                     </div>
                      </ul>
                 
                    </div>
                    </article>
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
        expand(idx) {
            const tmp = [false, false, false]
            if (!this.expanded[idx])
                tmp[idx] = true
            this.expanded = tmp
        }
    },
    data: function () {
        return {
            investProducts: [[
                {
                    imgsrc: 'https://sun9-40.userapi.com/LwhJLziwp3WWEeNi29VsLyONM81qWgKZM0U28w/ce_7QdTEalI.jpg',
                    title: 'based',
                    description: ['based', 'based', 'based']
                }, {
                    imgsrc: 'https://sun9-40.userapi.com/LwhJLziwp3WWEeNi29VsLyONM81qWgKZM0U28w/ce_7QdTEalI.jpg',
                    title: 'based2',
                    description: []
                }, {
                    imgsrc: 'https://sun9-40.userapi.com/LwhJLziwp3WWEeNi29VsLyONM81qWgKZM0U28w/ce_7QdTEalI.jpg',
                    title: 'base2',
                    description: []
                }],[
                {
                    imgsrc: '',
                    title: '',
                    description: []
                }, {
                    imgsrc: '',
                    title: '',
                    description: []
                }, {
                    imgsrc: '',
                    title: '',
                    description: []
                }],[
                {
                    imgsrc: '',
                    title: '',
                    description: []
                }, {
                    imgsrc: '',
                    title: '',
                    description: []
                }, {
                    imgsrc: '',
                    title: '',
                    description: []
                }]
            ],
            MASTERKEY: 0,
            expanded: [false, false, false],
            firstSwiperOptions: {
                effect: 'coverflow',
                loop: true,
                on: {
                  'slideChange':  () => {
                      let idx = this.$refs.firstSwiper.$swiper.realIndex+1
                      if (idx === 3) idx = 0
                      const tmp = [false, false, false]
                      tmp[idx] = true
                      this.expanded = tmp
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
                    stretch: -30,
                    depth: 70,
                    modifier: 5,
                    slideShadows: true
                },
            }
        }
    }
})