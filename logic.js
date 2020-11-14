// storing the tragets in a variable
var button = document.getElementById("button");
var input = document.getElementById("input");
var answer = document.getElementById("answer");
var eight = document.getElementById("eight");


//now we need to add event listeners for button clicked

var options = [  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes – definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don’t count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Ofcourse!", 
  "Negative!", 
  "Maybe!"]


button.addEventListener("click", function() {
if (input.value.length<1){	
answer.innerText = "saysomething";
} else {
	//more code here
	eight.innerText = "";
	var num = input.value.length % options.length;
    answer.innerText = options[num];
}
});