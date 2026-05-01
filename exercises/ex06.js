
// declaring variables 


let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum", "roses"]; 
let colorCounter=0;
let mood="neutral";


// reusable functions 

function makeImage(  colorToMatch ) { 
    //what the function actually does
    if (colors[colorCount] == colorToMatch) {
            $("body").append("<img width=100 src='"+colorToMatch
                +".webp'>"); 
                    console.log("it happened!");
    console.log(colors[colorCount]);
    }

}

//what happens when the button is clicked 


$("#needy-button").click(function () { 
 
count = count + 1;
colorCount=count-1;

  $("#needy-button").html( "Clicks: " + count + " Color: " + colors[colorCount] );
   $("body").css("background-color", colors[colorCount]);
   
   if (count==4) { 
        count=0;  
        console.log("it happened");
    }

   if (colors[colorCount] == "HotPink") { 
        $("#needy-button").after(" notPink ");

    if (count < 5) {mood="fresh and happy"; }
    }
    
    
    else {
      $("#needy-button").after(" all other colors ");

makeImage("Orchid"); 
makeImage ("roses");
makeImage("Plum");
makeImage ("Coral");


      console.log(mood) ;
    }



});