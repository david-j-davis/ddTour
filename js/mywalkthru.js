//A simple jQuery site tour solution

function ddTour() {

	//Add next buttons
	$('.ddTour span').append('<button style="margin-top:1em;margin-bottom:0;">Next</button>');
	//Add first textbox
	$('.ddTour').each(function(){
		$(this).prepend('<div class="ddtextbox"></div>');
		var description = $('span',this).html();
		$('.ddtextbox',this).append().html(description);

	});

	//Show the first textbox and hide the rest
	$('.ddtextbox:gt(0)').hide();
	//Get length of my textboxes
	index = $('.ddtextbox').length;
	nextItem = 0;
	
	//Add next action when button clicks
	$('.ddtextbox button').on('click', function(e){
		e.preventDefault();
		nextItem++;
		//Fade out current div
		$(this).parents('.ddtextbox').fadeOut();
		//Fade the next div in
		$('.ddtextbox').eq(nextItem).fadeIn();
		//scroll to next div and fadeIn
		$('html,body').animate({scrollTop: $('.ddTour').eq(nextItem).offset().top-100});
		//Apply "End" to last button
		if (nextItem === (index-1)) {
			$('.ddTour button').html('End');
		}
		return false; //Prevent Default and event bubbling.
		
	});

}