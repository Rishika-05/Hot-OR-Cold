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
  newGame();
  document.getElementById("js-new-game").onclick = function()
    {
      newGame();
    }
  }); 
	/*newGame();
	document.getElementById("js-guess-submit").onclick = function(){
	var guess= document.getElementById("js-user-guess").value;
    var feedback=getf(guess);
    $(".count").text(count);
    count++;
};*/
    

function newGame(){
 var y = Math.floor(Math.random() * 100 + 1); 
      
    var guess = 0; 
    $("span").text(guess);
    $("h2").text("Make Your Guess!!"); 
   document.getElementById("js-guess-submit").onclick = function(event){
   event.preventDefault();      
   var x = document.getElementById("js-user-guess").value; 
   if(x == y) 
   {
       guess++;
       $("span").text(guess);
       $("h2").text("YOU GUESSED IT!");
   } 
   else if(Math.abs(x-y)<=10 )
   {     
       guess++; 
       $("span").text(guess);
       if(y>x)
       $("h2").text("Hotter..!!(Try greater number)");
     else
      $("h2").text("Hotter..!!(Try smaller number)");
   } 
   else if(Math.abs(x-y)<=20)
   {     
       guess++; 
       $("span").text(guess);
       if(y>x)
        $("h2").text("Hot..!!(Try greater number)");
     else
      $("h2").text("Hot..!!(Try smaller number)");
   } 
   else if(Math.abs(x-y)<=30)
   {     
       guess++; 
       $("span").text(guess);
       if(y>x)
        $("h2").text("Warm..!!(Try greater number)");
     else
      $("h2").text("Warm..!!(Try smaller number)");
   } 
   else if(Math.abs(x-y)<=40)
   {     
       guess++; 
       $("span").text(guess);
       if(y>x)
       $("h2").text("Cold..!!(Try greater number)");
     else
      $("h2").text("Cold..!!(Try smaller number)");
   } 
   else if(Math.abs(x-y)<=50)
   {     
       guess++; 
       $("span").text(guess);
       if(y>x)
        $("h2").text("Colder..!!(Try greater number)");
     else
      $("h2").text("Colder..!!(Try smaller number)");
   } 
   else
   { 
       guess++;
       $("span").text(guess); 
       $("h2").text("Veryy far.....!!");
   } 
}
} 

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