Vue.component('page1', {
    template: `
    				<div class="page1">
    					<header1></header1>
    						<div class="page1__text"><p>Начни инвестировать<p> <p> \n прямо сейчас!</p></div>
    						<a href="#stap" class="page1__btn">Вперед</a>
								<div class="page1__img"><img src="img/finance_analytics_monochromatic.svg" alt=""></div>

    					<div class="waveWrapper waveAnimation">
						  <div class="waveWrapperInner bgTop">
						    <div class="wave waveTop" style="background-image: url('img/wave-top.png')"></div>
						  </div>
						  <div class="waveWrapperInner bgMiddle">
						    <div class="wave waveMiddle" style="background-image: url('img/wave-mid.png')"></div>
						  </div>
						  <div class="waveWrapperInner bgBottom">
						    <div class="wave waveBottom" style="background-image: url('img/wave-bot.png')"></div>
						  </div>
						</div>
    				</div>
    		`
})