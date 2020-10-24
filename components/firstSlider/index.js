Vue.component('first-slider', {
    template: `
    <swiper ref="swiperComponents"
            :options="firstSwiperOptions">
            <swiper-slide>
               <first-slide></first-slide>
            </swiper-slide>
            <swiper-slide>
               <second-slide></second-slide>
            </swiper-slide>
</swiper>
    `,
    data: function () {
        return {
            firstSwiperOptions: {
                loop: true,
                slidesPerView: 1
            }
        }
    }
})