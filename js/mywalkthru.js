//My Walk-thru

function mywalkthru() {

	//Add next buttons
	$('#mywalkthru span').append('<button style="margin-top:1em;margin-bottom:0;">Next</button>');
	//Add first textbox
	$('#mywalkthru').each(function(){
		$(this).prepend('<div class="mytextbox"></div>');
		var description = $('span',this).html();
		$('.mytextbox',this).append().html(description);

	});

	//Show the first textbox and hide the rest
	//$('.mytextbox:gt(0)').css('visibility', 'hidden');
	$('.mytextbox:gt(0)').hide();
	//Get length of my textboxes
	index = $('.mytextbox').length;
	nextItem = 0;
	
	//Add next action when button clicks
	$('.mytextbox button').on('click', function(){
		
		nextItem++;
		//if (nextItem == (index-1)) {nextItem = (index-1)};
		//$(this).parent().parent().find('.mytextbox').fadeOut();
		$(this).parents('.mytextbox').fadeOut();
		//scroll to next li and fadeIn
		$('html, body').animate({scrollTop: $(this).parents('#mywalkthru').nextAll().offset().top});
		$('.mytextbox').eq(nextItem).fadeIn(800);
		if (nextItem === (index-1)) {
			$('#mywalkthru button').html('End');
		}
		return false; //Prevent Default and event bubbling.
		
	});

}