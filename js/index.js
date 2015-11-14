$(document).ready(function(){

$("a[href^='#']").click(function(){
	$("html,body").animate({scrollTop: $("a[name='" + this.hash.slice(1) + "']").offset().top - 100},300);
	return false;
});
/* Elastik menu*/
var menuTop = $("#top-nav");
var menuTopPosition = $("#top-nav").offset().top;
var currentMenuTopPos = $("#top-nav").scrollTop();
$(window).scroll(function(){
	if($(window).scrollTop()>=menuTopPosition){
		menuTop.addClass("top-nav-retrofit")
		.css("margin-top",-menuTopPosition);
	}else{
		menuTop.removeClass("top-nav-retrofit")
				.css("margin-top", 0);
	};	
});

});