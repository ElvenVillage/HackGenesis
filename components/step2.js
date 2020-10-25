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
                                <div class="panel__block panel_block1" style="background-color: white">
                                  <div style="display: grid; grid-template-columns: 1fr 1fr">
                                    <div style="background-color: #fed243; border-radius: 20px; width: ${(isMobile)? maxWidth : '500px'}; height: 60px;margin-left: 100px; position: relative; top: 400px"><a href="#" class="page3__btn">Открыть брокерский счёт</a></div>
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