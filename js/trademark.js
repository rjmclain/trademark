
$('.menu-btn').click(function(){
	$('.menu-overlay').toggleClass('active');
	$('.menu-btn').toggleClass('active');
});


$('.menu-overlay .home').click(function(){
	$('.active').removeClass('active');
	$('.home-content').addClass('active');
});

$('.menu-overlay .about').click(function(){
	$('.active').removeClass('active');
	$('.about-content').addClass('active');
});

$('.menu-overlay .contact').click(function(){
	$('.active').removeClass('active');
	$('.contact-content').addClass('active');
});