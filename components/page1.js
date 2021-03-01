Vue.component('page1', {
    template: `
    				<div class="page1" id="page1">
    					<header1></header1>
    						<div class="page1__text" ><p>Начни инвестировать<p> <p> \n прямо сейчас!</p></div>
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
    				<script type="text/javascript">
		    					  var page1 = document.getElementById('page1');
		    					  var icon__menu =document.querySelector('.page1__text');
								  page1.onmouseenter = function() { // курсор зашёл на элемент-родитель [mozilla.org]
								    var nav__menu= document.querySelector('.page1__text');
										nav__menu.classList.toggle('animate__animated  animate__backInLeft');
								  }
								  page1.onmouseleave = function() { // курсор ушёл с элемента-родителя
								    	var user_menu= document.querySelector('.page1__text');
										user_menu.classList.remove('animate__animated  animate__backInLeft');	
								  }

    				</script>

    		`
})