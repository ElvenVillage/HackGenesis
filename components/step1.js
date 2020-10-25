Vue.component('step-2', {
    template: `
    <div class="staps" style="font-family: 'arial_bold', Arial, sans-serif">
        <div class="container">
            <div class="page-header">
            </div>
            <div style="display: flex; flex-direction: row"><div style="flex-grow: 1; flex-direction: column">
        <ul class="timeline">
            <li class="timeline-inverted">
              <div class="timeline-badge warning">2<i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-panel" style="height: 100vh"></div>
            </li>
        </ul>
        
        </div><div style="flex-grow: 3">
        <div style="font-weight: bold; font-size: large">Шаг 2. Получите бесплатные рекомендации по подбору пакетов</div>
        <div style="flex-direction: column">
        <table v-for="(pr, idx) in investProducts[MASTERKEY]" :key="idx"
               style="background: linear-gradient(to right, #421b70, #4f76ac);
               width: 600px; height: 100px; color: white; margin: 50px; text-align: left">
        <tr><td><img :src="pr.imgsrc" style="width: 200px; height: 100px; padding: 20px"></td><td>
        <table><tr><td>{{ pr.type }}</td></tr>
               <tr><td>{{ pr.title }}</td></tr>
               <tr><td>{{ pr.percent }}</td><td>{{ pr.price }}</td></tr></table>
         </td></tr>
        </table>
        </div></div>
        </div></div>
      </div>
    		`,
    data: function () {
        return {
            expanded: [true, false, false],
            investProducts: [[
                {
                    imgsrc: 'https://pngimg.com/uploads/yandex/yandex_PNG23.png',
                    title: 'Яндекс',
                    percent: 'до 14,5%',
                    price: 'от 1500 рублей',
                    type: '#Акции'
                }, {
                    imgsrc: 'https://free-png.ru/wp-content/uploads/2020/09/sberbank__2-01.png',
                    title: 'Сбербанк',
                    percent: 'до 6%',
                    price: 'от 10000 рублей',
                    type: '#Защищенные инвестиции'
                }, {
                    imgsrc: 'https://pngimg.com/uploads/amazon/amazon_PNG28.png',
                    title: 'Amazon',
                    percent: 'до 6%',
                    price: 'от 10000 рублей',
                    type: '#Защищенные инвестиции'
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
            MASTERKEY: 0
        }
    }
})