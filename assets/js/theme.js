jQuery(document).ready(function($){

	var time  = 4000;
	var timed = setTimeout(slideShow, time);

	function slideShow(target, link)
	{
		clearTimeout(timed);

		var target = target;
		var link   = link;

		if(target == undefined && link == undefined)
		{
			if($('#testimonial-control li:last-child').hasClass('active'))
			{

				target               = $('#testimonials .testimonial:first-child');
				link				 = $('#testimonial-control li:first-child');

			}else{

				target               = $('#testimonials .testimonial.active').next();
				link				 = $('#testimonial-control li.active').next();

			}
		}

		$('#testimonials .testimonial').removeClass('active');
		$('#testimonial-control li').removeClass('active');

		$(target).addClass('active bounceInLeft');
		$(link).addClass('active');

		timed = setTimeout(slideShow, time);
	}

	$('#testimonial-control a').click(
		function(e)
		{
			e.preventDefault();

			var target = $(this).attr('href');
			var link   = $(this).parent();

			slideShow(target, link);
		}
	);

});