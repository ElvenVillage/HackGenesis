




var icon__menu =document.querySelector('.icon__menu');
icon__menu.addEventListener("click", function(e) {
	var nav__menu= document.querySelector('.nav__menu');
	nav__menu.classList.toggle('_active');
	var menu__body= document.querySelector('.menu__body');
	menu__body.classList.toggle('_active');
});