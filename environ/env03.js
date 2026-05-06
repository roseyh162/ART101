let count = 0 

let environmentTitle = "The Mermaid's Adventure";

let environmentElements = ["ocean", "mermaid", "bubbles", "kelp forest"];
let colors = ["lightblue", "lightgreen", "lightpink", "lightseagreen"];

$("#needy-button").click(function () {
    count = count + 1;
    let colorCount = count - 1;

    if (colorCount < colors.length) {
        $("#needy-button").html("Clicks: " + count + " Color: " + colors[colorCount]);
        $("body").css("background-color", colors[colorCount]);
    } else {
        $("#needy-button").after(" The Mermaid's Adventure ");
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
