$(document).ready(function(){
	$('.button1').on('click', function() {
		$('img').toggle();
	})
	$('.button2').on('click', function(){
		$('img').slideToggle();
	})
	$('.button3').on('dblclick', function(){
		$('img').fadeToggle();
	})

	$('.button4').on('dblclick',function(){
		$('h1').toggleClass('change')
	})

	// when this button is clicked
	$('.button5').click(function(){
		// find the ul element, and add li to the end
		$('ul').append('<li>yes!</li>')
	})
	
	// when this div has a mouse hover (like mouse in or mouse out)
	$('.box').hover(function(){
		// changes the width of the div
		$(this).animate({
			left: "300px",
			width: "600px",
			height: "300px",
			opacity: .4
		})
	})

	// when this h2 has a mouse leave it 
	$('.slide').mouseleave(function(){
		// make the h2 slide up / or slide toggle
		$(this).slideUp()
	})

	// when this div has a mouse hover (like mouse in or mouse out)
	$('.tealbox').hover(function(){
		// makes the tealbox div fade away
		$(this).fadeOut()
	})
	// when this button is clicked 
	$('.button6').click(function(){
		// makes the tealbox div come back
		$('.tealbox').fadeIn()
	})

	$('.button4').on('dblclick',function(){
		$('h1').toggleClass('change')
	})
	
});
