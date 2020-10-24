Vue.component('staps', {
    template: `
    <div class="staps" style="font-family: 'arial_bold', Arial, sans-serif">
        <div class="container">
            <div class="page-header">
            </div>
            <div style="display: flex; flex-direction: row"><div style="flex-grow: 1">
        <ul class="timeline">
            <li class="timeline-inverted">
              <div class="timeline-badge warning">1<i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-panel" style="height: 100vh"></div>
            </li>
        </ul></div><div style="flex-grow: 3">
        <div style="font-weight: bold; font-size: large">Шаг 1. Укажите Ваш опыт в инвестировании</div>
        <div>«Вам может пригодиться раздел "Научиться"»</div>
        <div class="swiper-wrapper">
        <swiper :options="secondSwiperOptions" class="swiper" ref="firstSwiper">
             <swiper-slide class="swiper-slide"><div style="position: absolute; top: 20px">
             <img src="img/platin.png" style="height: 60px; width: 60px"><br>
             Новичок<hr>
             </div></swiper-slide>
             <swiper-slide class="swiper-slide"><div style="position: absolute; top: 20px">
             <img src="img/serebro.png"style="height: 60px; width: 60px"><br>
             Людилньб<hr></div></swiper-slide>
             <swiper-slide class="swiper-slide"><div style="position: absolute; top: 20px">
             <img src="img/gold.png"style="height: 60px; width: 60px"><br>Профессионал<hr></div></swiper-slide>
             <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper></div></div>
        </div></div>
      </div>
    		`,
    data: function () {
        return {
            expanded: [true, false, false],
            secondSwiperOptions: {
                loop: true,
                preventClicksPropagation: false,
                slidesPerView: 6,
                spaceBetween: 30,
                preventClicks: false,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                },
                initialSlide: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: false
                },
                touchStartPreventDefault: false,
                passiveListeners: false,
            }
        }

    }
})