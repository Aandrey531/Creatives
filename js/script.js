let hr = document.querySelector(".hr")
let burger = document.querySelector(".burger");
let soc_seti = document.querySelector(".soc_seti");
let nav_menu = document.querySelector(".nav_menu");
let nav = document.querySelector("#nav");

burger.addEventListener("click", navMenu);



function navMenu() {
	burger.classList.toggle("transform");
	nav_menu.classList.toggle("none");
	soc_seti.classList.toggle("none");
	nav.classList.toggle("nav_height");
}

function rr() {
	hr.style.width = "100%";
	hr.style.left = "0%";
	hr.style.opacity = "0.8";
}


$("body").on('click', '[href*="#"]', function(e){
  	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top }, 1000);
  	e.preventDefault();
});
setTimeout(rr, 2000);
AOS.init();
