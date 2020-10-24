Vue.component('first-slide', {
    template: `
    <div>
        <p @click="expanded = !expanded">Подробнее</p>
    
        <div v-if="expanded">
             Скрытый текст
         </div>
    </div>
    `,
    data: function() {
        return {
            expanded: false
        }
    }
})