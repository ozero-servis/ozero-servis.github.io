jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 1000, //300
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced

		//offset_opacity = 1200, <-------

		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 400, //700
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link <----------
	/*$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});*/

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible');
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});


	//fixed nav
	var card = $('#card');
	var secondaryNav = $('#nav'),
		secondaryNavTopPosition = secondaryNav.offset().top;
 
	$(window).on('scroll', function(){
		if($(window).scrollTop() > secondaryNavTopPosition ) {
			secondaryNav.addClass('is-fixed');
			card.addClass('has-top-margin');
		} else {
			secondaryNav.removeClass('is-fixed');
			card.removeClass('has-top-margin');
		}
	});

});