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

	$(".rotate").textrotator({
	  animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
	  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
	  speed: 2000 // How many milliseconds until the next word show.
	});

})