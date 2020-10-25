var isScrolling = false;
 
window.addEventListener("scroll", throttleScroll, false);
 
function throttleScroll(e) {
    if (isScrolling == false ) {
        window.requestAnimationFrame(function() {
          dealWithScrolling(e);
          isScrolling = false;
        });
    }
    isScrolling = true;
}   
 
function dealWithScrolling(e) {
    // do epic stuff    
    console.log("Scrolling");

   
    anim("qqq",'animate__bounce',1,"f",0);
   /* anim(".staps__info","animate__fadeIn",0,"p",0);
    anim('.adress__item','animate__fadeInUp',1,"p",0);
    anim('#programs__item',"animate__fadeInUp",4,"p",1);*/
    
}
function anim(id,clas,delay_count,Visible,start_delay){
	els=document.querySelectorAll(id);
	k=start_delay;
	console.log(els);
    for (var i=0; i<els.length; i++) {
    	if(isPartiallyVisible(els[i]) && Visible=="p"){
    		els[i].classList.add('animate__animated', clas,"d"+k);
    		if(k<delay_count-1){
    			k++;

    		}
    		else{
    			k=0;
    		}
    	}
    	if(isFullyVisible(els[i]) && Visible=="f"){
    		els[i].classList.add('animate__animated', clas,"d"+k);
    		if(k<delay_count-1){
    			k++;

    		}
    		else{
    			k=0;
    		}
    	}
    }
}
function isFullyVisible(el) {
  var elementBoundary = el.getBoundingClientRect();
 
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
 
  return ((top >= 0) && (bottom <= window.innerHeight));
}