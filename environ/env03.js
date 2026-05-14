

let environmentTitle = "The Mermaid's Adventure";

let environmentElements = ["ocean", "mermaid", "bubbles", "kelp forest"];
let colors = ["lightblue", "lightgreen", "lightpink", "lightseagreen"];
let count = 0 

$("#good-button").click(function () {
    count = count + 1;
    let colorCount = count - 1;

    if (colorCount < colors.length) {
        $("#good-button").html("Clicks: " + count + " Color: " + colors[colorCount]);
        $("body").css("background-color", colors[colorCount]);
    } else {
        $("#good-button").after(" The Mermaid's Adventure ");
    }

    let message = "<p>You clicked me " + count + " times.</p>";
    message = message + "<p> The Mermaid's Adventure " + mainEntity.favoriteFood + ".</p>";

    $("#output").html(message);
});

let mainEntity = {
    name: "The Mermaid",
    type: "soft border",
    mood: "whimsical",
    isMoving: true,
    favoriteFood: "seaweed",
    favoriteElement: environmentElements[1]
}    


function askNumber(whatNumber) {
 let userNumber = prompt("What time is it here?");
 
 if (userNumber == whatNumber) {
$("#output").html("You got it!"); 
 }
 else {
   $("#output").html("Noooooope");
 }
} 

$("#good-button") .click(function () {
askNumber("Always a fun time");

});