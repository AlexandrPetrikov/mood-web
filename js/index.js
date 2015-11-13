$(document).ready(function(){
$("a[href^='#']").click(function(){
	$("html,body").animate({scrollTop: $("a[name='" + this.hash.slice(1) + "']").offset().top},300);
	return false;
});

});