const isMobile = window.screen.availWidth <= 425

Vue.component('step-2', {
    template: `
    <div class="staps" style="font-family: 'arial_bold', Arial, sans-serif">
        <div class="container" >
            <div class="page-header">
            </div>
            <div style="display: flex; flex-direction: row"><div style="flex-grow: 1; flex-direction: column">
        <ul class="timeline" v-if="!isMobile">
            <li class="timeline-inverted">
              <div class="timeline-badge warning">2<i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-panel" style="height: 100vh"></div>
            </li>
        </ul>
        
        </div><div style="flex-grow: 3; padding-top: 30px">
        <div style="font-weight: bold; font-size: large; margin: 5px">Шаг 2. Получите бесплатные рекомендации</div>
        <div style="flex-direction: column">
        <table v-for="(pr, idx) in investProducts[MASTERKEY]" :key="idx"
               style="background: linear-gradient(to right, #421b70, #4f76ac);
               width: 600px; height: 100px; color: white; margin: ${(isMobile)? '-10px' : '50px'}; text-align: left">
        <tr><td style="width: ${(isMobile)? window.screen.availWidth/4 : '150px'}"><img :src="pr.imgsrc" style="width: 150px; height: 150px; padding: 20px"></td><td>
        <table><tr><td>{{ pr.type }}</td></tr>
               <tr><td>{{ pr.title }}</td></tr>
               <tr><td style="width: 200px;">{{ pr.percent }}</td><td>{{ pr.price }}</td></tr></table>
         </td></tr>
        </table>
        </div></div>
        </div></div>
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
            MASTERKEY: ((money_rate < 15)? 0 : ((money_rate  < 40)? 1 : 0))
        }
    }
})