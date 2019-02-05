$(document).ready(function () {

	$('.sights__item').on('mouseover', function() {
		$(this).find('.sights__image').addClass('sights__image_hover');
		$(this).find('.sights__item-title').addClass('sights__item-title_hover');
	});

	$('.sights__item').on('mouseout', function() {
		$(this).find('.sights__image').removeClass('sights__image_hover');
		$(this).find('.sights__item-title').removeClass('sights__item-title_hover');
	}); // added dependense to the elements of .sights__item

	$('body').on('click', '[href*="#"]', function(e){
		var fixed_offset = 100;
		$('html, body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
		e.preventDefault();
	});

	$('.sights__features_left-column').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInLeft',
		offset: 300
	});

	$('.sights__features_right-column').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInRight',
		offset: 300
	});

	$('.sight:nth-child(odd) .sight__text').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInRight',
		offset: 300
	});

	$('.sight:nth-child(even) .sight__text').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInLeft',
		offset: 300
	});

	$('.map').addClass("hidden").viewportChecker({
		classToAdd: 'visible animated bounceInUp',
		offset: 300
	});

});//конец ready