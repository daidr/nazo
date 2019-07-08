/*
*   Wavify
*   Jquery Plugin to make some nice waves
*   by peacepostman @ crezeo
 */
(function ($) {

	$.fn.wavify = function (options) {
		if ('function' !== typeof wavify) {
			console.error("wavify is not a function. Be sure to include 'wavify.js' before you include 'jquery.wavify.js'.")
			throw ("Error: wavify is not a function")
		}

		return wavify(this, options);
	};

	$('.wavepath1').wavify({
		height: 20,
		bones: 2,
		amplitude: 30,
		color: 'rgba(37, 37, 37, .7)',
		speed: .35
	});
	$('.wavepath2').wavify({
		height: 10,
		bones: 2,
		amplitude: 30,
		color: 'rgba(37, 37, 37, .5)',
		speed: .25
	});
	$('.wavepath3').wavify({
		height: 15,
		bones: 2,
		amplitude: 30,
		color: 'rgba(37, 37, 37, .3)',
		speed: .15
	});

}(jQuery));
