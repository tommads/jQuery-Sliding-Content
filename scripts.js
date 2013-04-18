jQuery(document).ready(function($) {
    
    // Add two blank divs to body
	$('#main').append('<div class="about"></div>');
	$('#main').append('<div class="portfolio"></div>');
	
	// Create two Deferred instances that can be handed to $.when()
	var d1 = new $.Deferred();
	var d2 = new $.Deferred();
	
	// Set up the chain of events...
	$.when(d1,d2).then(function() {
		$('.about .col300').addClass("sliding");
		$('.portfolio .col300').addClass("sliding1");
		$('.about').show();
		$('.portfolio').show()
	});
	
	// And finally: Make the actual ajax calls - load about and portfolio content
	$('.about').hide().load('/new/about .col300', function() { d1.resolve(); });
	$('.portfolio').hide().load('/new/portfolio .col300', function() { d2.resolve(); });


	// Click handling on about and work menu items
	$("#menu-item-17").click(function(e) {
		e.preventDefault();
		handleSlider($(".sliding1"), $(".sliding"));
	});

	$("#menu-item-91").click(function(e) {
		e.preventDefault();
		handleSlider($(".sliding"), $(".sliding1"));
	});

	// Function to control content sliding in and out
	function handleSlider(sliding, sliding1) {
		if (!sliding.is(":visible") && !sliding1.is(":visible"))  //show it
		{
			sliding.fadeIn(0).animate({"left": 0},800);
		} 
		else if (!sliding.is(":visible") && sliding1.is(":visible")) 
		{
		    sliding1.animate({"left": -330},500 ).delay(500).fadeOut(0);
		    sliding.fadeIn(0).animate({"left": 0},800);
		} 
		else 
		{
		    sliding.animate({"left": -330},500 ).delay(500).fadeOut(0);
		}
	};	
 
}); /* end of as page load scripts */
