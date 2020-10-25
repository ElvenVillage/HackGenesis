const isMobile = window.screen.availWidth <= 425
const maxWidth = window.screen.availWidth / 3
Vue.component('step-2', {
    template: `
<div class="staps" style="font-family: 'arial_bold', Arial, sans-serif">
    <div class="container">
        <div class="page-header">
        </div>
        <div style="display: flex; flex-direction: row">
            <div style="flex-grow: 1">
                <ul class="timeline">
                    <li class="timeline-inverted">
                        
                        <div class="timeline-badge warning">2<i class="glyphicon glyphicon-credit-card"></i></div>
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
                            <div class="panel__text">Шаг 2. Получите бесплатные рекомендации</div>
                            <div class="panel__blocks">
                                <div class="panel__block panel_block1" style="background-color: white">
                                    <div style="flex-grow: 3; padding-top: 30px">
                                        <div style="font-weight: bold; font-size: large; margin: 5px"></div>
                                        <div style="flex-direction: column">
                                            <table v-for="(pr, idx) in investProducts[MASTERKEY]" :key="idx"
                                                   style="background: linear-gradient(to right, #421b70, #4f76ac);
               width: 600px; height: 100px; margin: ${(isMobile)? '-10px' : '50px'}; text-align: left">
                                                <tr>
                                                    <td style="width: ${(isMobile)? window.screen.availWidth/4 : '150px'}"><img :src="pr.imgsrc"
                                                                                                                                style="width: 150px; height: 150px; padding: 20px">
                                                    </td>
                                                    <td>
                                                        <table style="color: white;">
                                                            <tr>
                                                                <td>{{ pr.type }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>{{ pr.title }}</td>
                                                            </tr>
                                                            <tr>
                                                                <td style="width: 200px;">{{ pr.percent }}</td>
                                                                <td>{{ pr.price }}</td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                        </div>
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
            expanded: [true, false, false],
            isMobile: isMobile,
            investProducts: [[
                {
                    imgsrc: 'img/yandex-icon.png',
                    title: 'Яндекс',
                    percent: 'до 14,5%',
                    price: 'от 1500 рублей',
                    type: '#Акции'
                }, {
                    imgsrc: 'img/sber.png',
                    title: 'Сбербанк',
                    percent: 'до 6%',
                    price: 'от 10000 рублей',
                    type: '#Защищенные инвестиции'
                }, {
                    imgsrc: 'img/amazon.png',
                    title: 'Amazon',
                    percent: 'до 6%',
                    price: 'от 10000 рублей',
                    type: '#Защищенные инвестиции'
                }],[
                {
                    imgsrc: 'img/LUKOIL_Logo.svg',
                    title: 'LUKOIL',
                    percent: 'до 5%',
                    price: 'от 10000 рублей',
                    type: '#Акции'
                }, {
                    imgsrc: 'img/Facebook.svg',
                    title: 'Facebook',
                    percent: 'до 4%',
                    price: 'от 10000 рублей',
                    type: '#Защищенные инвестиции'
                }, {
                    imgsrc: 'img/LUKOIL_Logo.svg',
                    title: 'LUKOIL',
                    percent: 'до 7%',
                    price: 'от 40000 рублей',
                    type: '#Акции'
                }],[
                {
                    imgsrc: 'img/mastercard.svg',
                    title: 'MasterCard',
                    percent: 'до 4%',
                    price: 'от 40000 рублей',
                    type: '#Защищенные инвестиции'
                }, {
                    imgsrc: 'img/LUKOIL_Logo.svg',
                    title: 'LUKOIL',
                    percent: 'до 7%',
                    price: 'от 40000 рублей',
                    type: '#Акции'
                }, {
                    imgsrc: 'img/Amazon.png',
                    title: 'Amazon',
                    percent: 'до 5%',
                    price: 'от 30000 рублей',
                    type: '#Защищенные инвестиции'
                }]
            ],
            MASTERKEY: ((money_rate < 15)? 0 : ((money_rate  < 40)? 1 : 2))
        }
    }
})