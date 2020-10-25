Vue.component('staps', {
    template: `
    <div class="staps" id="stap" style="font-family: 'arial_bold', Arial, sans-serif">
        <div class="container">
            <div class="page-header">
            </div>
            <div style="display: flex; flex-direction: row"><div style="flex-grow: 1">
        <ul class="timeline">
            <li class="timeline-inverted">
                <div class="man"><img src="../img/step_1.svg" alt=""></div>
              <div class="timeline-badge warning">1<i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-badge warning clsasd1 claseda"><i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-badge warning clsasd2 claseda"><i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-badge warning clsasd3 claseda"><i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-badge warning clsasd4 claseda"><i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-badge warning clsasd5 claseda"><i class="glyphicon glyphicon-credit-card"></i></div>
              <div class="timeline-badge warning clsasd6 claseda"><i class="glyphicon glyphicon-credit-card"></i></div>
 
              <div class="timeline-badge warning clsasd7 claseda"><i class="glyphicon glyphicon-credit-card"></i></div>
 
              <div class="timeline-badge warning clsasd8 claseda"><i class="glyphicon glyphicon-credit-card"></i></div>

              <div class="timeline-panel" style="height: 100vh">
                    <div class="panel__text">Шаг 1. Укажите ваш опыт в инвестировании</div>
                    <div style="padding-left: 50px; font-size: large">{{ courses[selectedCourse] }}</div>
                    <div class="panel__blocks">
                        <div class="panel__block panel_block1" @mouseover="selectCourse(0)">
                                <div class="panel_block__img"><img src="img/platin.png" alt=""></div>
                                <div class="panel_block__name">Новичок</div>
                                <div class="panel_block__text">Впервые интересуюсь</div>
                                <a  class="panel_block__btn">Далее</a>
                        </div>
                        <div class="panel__block panel_block2" @mouseover="selectCourse(1)">
                                <div class="panel_block__img"><img src="img/serebro.png" alt=""></div>
                                <div class="panel_block__name">Любитель</div>
                                <div class="panel_block__text">Давно инетересюсь этой темой</div>
                                <a class="panel_block__btn">Далее</a>
                        </div>
                        <div class="panel__block panel_block3" @mouseover="selectCourse(2)">
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
    		`,
    data: function() {
        return {
            courses: ['Вам может пригодиться раздел «Научиться»',' ' +
            'Вам может пригодиться раздел «2»','Вам может пригодиться раздел «3»'],
            selectedCourses: [false, false, false],
            selectedCourse: -1,
        }
    },
    methods: {
        selectCourse(idx) {
            const nCourses = [false, false, false]
            nCourses[idx] = true
            this.selectedCourse = idx
            this.selectedCourses = nCourses
        }
    }
})