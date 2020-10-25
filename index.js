Vue.use(VueAwesomeSwiper)
Vue.use(VueFullpage)

MASTERKEY = 0

new Vue({
    el: '#app',
    data: {
        opts: {
            start: 0,
            dir: 'v',
            beforeChange: function (prev, next) {
            	console.log('before', prev, next)

				            function dealWithScrolling() {
				    // do epic stuff    
				    console.log("Scrolling");

				   
				    anim('qqq','animate__bounce',1,"f",0);
				   /* anim(".staps__info","animate__fadeIn",0,"p",0);
				    anim('.adress__item','animate__fadeInUp',1,"p",0);
				    anim('#programs__item',"animate__fadeInUp",4,"p",1);*/
				    
				}
				function anim(id,clas,delay_count,Visible,start_delay){
					console.log(id)
					els= document.querySelectorAll(id);
					k=start_delay;
					console.log(document.querySelectorAll(id));
				    for (var i=0; i<els.length; i++) {
				    		els[i].classList.add('animate__animated', clas,"d"+k);
				    		if(k<delay_count-1){
				    			k++;

				    		}
				    		else{
				    			k=0;
				    		}
				    	}
				}
				dealWithScrolling();
          },
        }
    }
})