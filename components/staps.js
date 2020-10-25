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

              <div class="timeline-panel" style="height: 100vh">
                  
                    <div class="panel__blocks">
                        <div class="panel__block panel_block1">
                                <div class="panel_block__img"><img src="img/platin.png" alt=""></div>
                                <div class="panel_block__name">Новичек</div>
                                <div class="panel_block__text">Впервые интересуюсь</div>
                                <a class="panel_block__btn">Далее</a>
                        </div>
                        <div class="panel__block panel_block2">
                                <div class="panel_block__img"><img src="img/serebro.png" alt=""></div>
                                <div class="panel_block__name">Любитель</div>
                                <div class="panel_block__text">Давно инетересюсь этой темой</div>
                                <a class="panel_block__btn">Далее</a>
                        </div>
                        <div class="panel__block panel_block3">
                                <div class="panel_block__img"><img src="img/gold.png" alt=""></div>
                                <div class="panel_block__name">Профессионал</div>
                                <div class="panel_block__text">Уже инвестирую</div>
                                <a class="panel_block__btn">Далее</a>
                        </div>
                    </div>


              </div>
            </li>
        </ul></div>
        </div>
    </div>
    </div>
    		`
})