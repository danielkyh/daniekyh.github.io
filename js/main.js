$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.slider').slider({full_width: true});

	// Hover color change on links
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

	// Rotate through array of words
	$(".rotate").textrotator({
	  animation: "flipUp", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
	  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
	  speed: 1200 // How many milliseconds until the next word show.
	});


	// Scroll on click
	$('.scroll-links').click(function(event){
		event.preventDefault();
		var id = $(this).attr("href")
		$('html, body').animate({
			scrollTop: $(id).offset().top
			}, 1000);
		})
	

})