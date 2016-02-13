$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.slider').slider({full_width: true});


	$('svg')
	.mouseover(function(){
		$(this).css({"fill": "#50514F"})
	})
	.mouseout(function(){
		$(this).css({"fill": "#EF233C"})
	})

	var titleColor = ""
	$('.card-title')
	.mouseover(function() {
		titleColor = $(this).css("color")
		$(this).css({"color": "#EF233C"})
	})
	.mouseout(function(){
		$(this).css({"color": titleColor})
	})

})