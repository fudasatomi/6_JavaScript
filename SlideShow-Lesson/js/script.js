$("document").ready(function(){
	$(".theTarget").skippr();
});

$(".theTarget").skippr({
	transition : 'fade',
	speed : 1000,
	easing : 'easeOutQuart',
	navType : 'black',
	childrenElementType : 'div',
	arrows : true,
	autoPlay : true,
	autoPlayDuration : 3000,
	keyboardOnAlways : true,
	hidePrevious : false
});