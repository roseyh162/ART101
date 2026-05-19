

let environmentTitle = "The Mermaid's Adventure";

let environmentElements = ["ocean", "mermaid", "bubbles", "kelp forest"];
let colors = ["lightblue", "lightgreen", "lightpink", "lightseagreen"];
let count = 0 
let following = false;

$("#good-button").click(function () {
    console.log("good-button clicked");

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



$("#oceancreature").click(function () {
$(this).toggleClass("transformed");
  $("#status").text("The ocean creature changed shape.");
}); 

$("#oceancreature").hover(
  function () {
    $("#thought").stop(true, true).slideDown(300);
     $("#status").text("The creature revealed a thought.");
  },
  function () {
 $("#thought").stop(true, true).slideUp(300);
  $("#status").text("The thought disappeared.");
  },
  function () {

  }
);

$(document).keydown(function (event) {
    if (event.key === " " || event.code === "Space") {
        event.preventDefault();
         following = !following;
         $("# ocean creature").toggleClass("following");

             if (following === true) {
      $("#status").text("The ocean creature is following your cursor.");
    } else {
      $("#status").text("The oceancreature stopped following you.");
    }
    }
});

$(document).mousemove(function (event) {
 if (following === true) {
     $("#oceancreature").css({
      left: event.pageX - $("#scene").offset().left + 30,
      top: event.pageY - $("#scene").offset().top + 30
    });
 }
});