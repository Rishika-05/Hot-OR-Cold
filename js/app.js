function handleInstructionsModal() {
	// when users click on the element with
	// `.js-what` class, we'll fade in
	// the instructions modal
	$('.js-what').click(function() {
		$('.overlay').fadeIn(1000);
	});

	// when users click on the element with the
	// `.js-close` class, we'll fade out
	// the instructions modal
	$('.js-close').click(function(){
  		$(".overlay").fadeOut(1000);
  	});
}


// `$(document).ready` lets you specify a
// function that should execute when all the
// resources required by your web page have loaded.
// This code says, when the document is ready, run the
// `handleInstructionsModal` function.
$(document).ready(function(){
	handleInstructionsModal();
    var y = Math.floor(Math.random() * 10 + 1); 
      
    // counting the number of guesses 
    // made for correct Guess 
    var guess = 0; 
      
   document.getElementById("js-guess-submit").onclick = function(){ 
      
   // number guessed by user      
   var x = parseInt(document.getElementById("js-user-guess").value); 
  
   if(x == y) 
   {
       guess++;
       $("span").text(guess);
       $("h2").text("YOU GUESSED IT!");
   } 
   else if(x > y) /* if guessed number is greater 
                   than actual number*/ 
   {     
       guess++; 
       $("span").text(guess);
       $("h2").text("OOPS SORRY!! TRY A SMALLER NUMBER");
   } 
   else
   { 
       guess++;
       $("span").text(guess); 
       $("h2").text("OOPS SORRY!! TRY A GREATER NUMBER");
   } 
} 

	/*newGame();
	document.getElementById("js-guess-submit").onclick = function(){
	var guess= document.getElementById("js-user-guess").value;
    var feedback=getf(guess);
    $(".count").text(count);
    count++;
};*/
    
});


/*function newGame()
{
	var secretNumber = Math.floor(Math.random() * 100 + 1); 
	var count=1;
	
}


function getf(g)
{
   if(g> secretNumber)
   	$("#feedback").text("Try a lower number.");
   else if(g<secretNumber)
   	$("#feedback").text("Try a greater number.");
   else if(g==secretNumber)
   	$("#feedback").text("You guessed it!");
}*/
