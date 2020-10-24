Vue.component('first-slider', {
    template: `
    <div class="swiper-wrapper">
        <swiper ref="swiperComponents"
            :options="firstSwiperOptions"
            class="swiper">
            <swiper-slide class="swiper-slide">
               <second-slide></second-slide>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
               <first-slide></first-slide>
            </swiper-slide>
            <swiper-slide class="swiper-slide">
                <third-slide></third-slide>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
    `,
    data: function () {
        return {
            firstSwiperOptions: {
                effect: 'coverflow',
                loop: true,
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
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