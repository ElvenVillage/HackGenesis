Vue.component('step-3', {
    template: `
    <div class="staps" style="font-family: 'arial_bold', Arial, sans-serif">
    <div class="container">
        <div class="page-header">
        </div>
        <div style="display: flex; flex-direction: row">
            <div style="flex-grow: 1">
                <ul class="timeline">
                    <li class="timeline-inverted" v-if="!isMobile">
                        
                        <div class="timeline-badge warning">3<i class="glyphicon glyphicon-credit-card"></i></div>

                       <div class="timeline-badge warning clsasd1 claseda"><i
                                class="glyphicon glyphicon-credit-card"></i></div>
                        <div class="timeline-badge warning clsasd2 claseda"><i
                                class="glyphicon glyphicon-credit-card"></i></div>
                        <div class="timeline-badge warning clsasd3 claseda"><i
                                class="glyphicon glyphicon-credit-card"></i></div>
                        <div class="timeline-badge warning clsasd4 claseda"><i
                                class="glyphicon glyphicon-credit-card"></i></div>
                        <div class="timeline-badge warning clsasd5 claseda"><i
                                class="glyphicon glyphicon-credit-card"></i></div>
                        <div class="timeline-badge warning clsasd6 claseda"><i
                                class="glyphicon glyphicon-credit-card"></i></div>

                        <div class="timeline-badge warning clsasd7 claseda"><i
                                class="glyphicon glyphicon-credit-card"></i></div>

                        <div class="timeline-badge warning clsasd8 claseda"><i
                                class="glyphicon glyphicon-credit-card"></i></div>
                        <div class="timeline-panel" style="height: 100vh">
                            <div class="panel__text">Готово! Вам осталось зарегистрировать счёт</div>
                            <div class="panel__blocks">
                                <div style="background-color: white">
                                  <div style="display: grid; grid-template-columns: 2fr 1fr">
                                    <div style="background-color: #fed243; border-radius: 20px; width: ${(isMobile)? maxWidth : '700px'}; height: 100px;position: relative; top: 300px; left: 200px"><a href="#" class="page3__btn" style="vertical-align: central; right: 250px; bottom: -10px">Открыть брокерский счёт</a></div>
                                    <div><img src="img/step3.jpg"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>

        </div>
    </div>
</div></div>
</div>
</div>
</div>
    `,
    data: function () {
        return {
            isMobile: isMobile,
            maxWidth: maxWidth
        }
    }
})