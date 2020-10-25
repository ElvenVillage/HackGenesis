let isOnMobile = window.screen.availWidth <= 425
Vue.component('know-how', {
    template: `

     
<div style="background-color: #2328ec; padding-top: 15vh">
   <div class="waveWrapper waveAnimation">
              <div class="waveWrapperInner2 bgTop">
                <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
              </div>
              <div class="waveWrapperInner2 bgMiddle">
                <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
              </div>
              <div class="waveWrapperInner2 bgBottom">
                <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
              </div>
            </div>
    <div style="font-family: 'arial_bold', Arial, sans-serif; font-size: xx-large;
                position: absolute; left: 100px; top: 120px">Полезно знать</div>
    <div style="display: grid; grid-template-columns: 1fr 2fr">
        <div></div>
        <img v-if="!isOnMobile" src="img/data_analytics.svg" style="position: absolute; bottom: 60px; width: 500px; height: 550px; left: 110px; z-index: 1000">
        <div>
            <table style="background-color: white; color: #82a7bb; border-radius: 30px;
                         padding: 50px; z-index: 600">
               <thead style="font-size: larger; font-weight: bold">Примечательные плюсы продуктов</thead>
               <tbody>
                   <tr>
                       <td><p style="color: black; font-weight: bold">Акции</p></td>
                       <td><p style="color: black; font-weight: bold">Облигации</p></td>
                       <td><p style="color: black; font-weight: bold">Структурные продукты</p></td>
                   </tr>
                   <tr>
                       <td><li>Доля компании</li></td>
                       <td><li>Даем в долг компании</li></td>
                       <td><li>Заранее собранный набор продуктов</li></td>
                   </tr>
                   <tr>
                       <td><li>Дивидентные выплаты</li></td>
                       <td><li>Стабильные выплаты</li></td>
                       <td><li>Выплаты по условиям</li></td>
                   </tr>
                   <tr>
                       <td><li>Заработок на изменении цены бумаги</li></td>
                       <td><li>Заработок на изменении цены бумаги</li></td>
                       <td><li>Риски ограничены условиями</li></td>
                   </tr>
                   <tr>
                       <td><li>Есть дешевые бумаги</li></td>
                       <td><li>Порог входа от 1000 рублей</li></td>
                       <td><li>Конкретные сроки инвестирования</li></td>
                   </tr>
               </tbody>
            </table>
        </div>
    </div>
</div>`,
    data: function () {
        return {
            isOnMobile: isOnMobile
        }
    }
    }
)