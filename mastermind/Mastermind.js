let reset = document.getElementById("reset");
let submit=document.getElementById("submit");
reset.addEventListener('click', resetGame, false);
submit.addEventListener('click',guesses,false);
var guess =document.getElementsByClassName("guess");
var feedbacks = document.getElementById("feedbacks");
let secretCode = [];
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
/****  WRITE A COMMAND HERE THAT WILL RESET THE GAME USING resetGame() *****/
window.onload = function() {
   resetGame();
  };
function resetGame() {
    /****   
    /****  USING THE FUNCTION YOU DEFINE BELOW *****/
   
    
    secretCode=[];
   clear()
    
   
    for(var i =0;i<4;i++){
        secretCode[i]=colors[Math.floor(Math.random()*colors.length)];
        
    }
    console.log(secretCode);


}
function guesses(){
    var count=0;
//    clear();
var feedback = document.createElement("div");
feedback.className="feedback"

     for(var i =0;i<4;i++){
        var text =document.getElementsByTagName("select")[i];
        var guess= document.createElement('div');
        console.log(text.options[text.selectedIndex].text)
        var colour =text.options[text.selectedIndex].text
        guess.className= colour;
        guess.className+=" peg"
        feedback.appendChild(guess);
    }

    for(var i=0;i<secretCode.length;i++){
        var text =document.getElementsByTagName("select")[i];
        var colour =text.options[text.selectedIndex].text
     
        
      
        var peg =document.createElement('div');
        
    
        
        if(colour==secretCode[i]){
            peg.className="black";
            count++;

           


        }else if(secretCode.includes(colour)){
            peg.className="white";
          

           
        }
     
        if(count== 4){
           
         peg.textContent="YOU WIN!"; 
         peg.className="win";
            
         feedback.appendChild(peg);
         feedbacks.appendChild(feedback);
         break;
        }
        peg.className+=" peg"
       
        feedback.appendChild(peg);
        document.getElementById("gameBoard").appendChild(feedback);
        feedbacks.appendChild(feedback);
        
    }
    



}
function clear(){
    while (feedbacks.firstChild) {
        feedbacks.removeChild(feedbacks.firstChild);
    }
}



/*** CREATE A FUNCTION HERE THAT WILL PICK A RANDOM 4-COLOR CODE AND ****/
/***** STORE IT AS AN ARRAY IN THE VARIABLE NAMED secretCode. ******/
//For example, a valid value for secretCode could be ["blue", "red", "green", "blue"]

    //first make sure there is nothing in the secretCode array by making it an empty array

    //push 4 random strings from the colors array into the secretCode array
    