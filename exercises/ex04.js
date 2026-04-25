


let count=0;
let colors= ["Orchid", "Coral", "HotPink", "Plum"];
let colorCount;

$ ("#needy-button") .click ( function(){

    count = count +1;

    colorCount=count-1;

    $ ("#needy-buton") .html ( "you clicked me"
     + count + " and your favorite color today is: " + colors [colorCount] );

   $("#needy-button").css( "background-color", colors[colorCount]);  

  

    $("html").css( "background-color", colors[colorCount+1]);



}); 
    
