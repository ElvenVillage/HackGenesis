Vue.component('first-slide', {
    template: `
   <div style="width: 100px; height: 200px; position: absolute; left: 10px; top: 10px">
      <img v-bind:src="imgsrc" style="width: 100px; height: 300px">
      <p style="color: white; vertical-align: center">{{ title }}</p>
   </div>
    `,
    props: ['imgsrc', 'title']
})