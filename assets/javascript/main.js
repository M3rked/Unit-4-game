


var targetScore = 39;
var counter= 0;
var numberValue =[5, 10, 15, 1];
var Crystals= ["rubyImage", "emeraldImage", "opalImage", "sapphireImage"];

$("#number-to-guess").text(targetScore);




for (var i=0; i < numberValue.length; i++){
    targetScore = 39;
     counter= 0;
     numberValue =[5, 10, 15, 1];
     Crystals= ["rubyImage", "emeraldImage", "opalImage", "sapphireImage"];
     buttons = $("<button>");
    
    buttons.addClass("image-button image image-button-color");
    buttons.attr("data-image",numberValue [i]);
    buttons.text(numberValue[i]);
    $("#buttons").append(buttons);
    

  
    console.log(buttons)
}
 
$(".buttons").on("click,", function() {
    var crystalColor = ($(this).attr("data-value"));
    crystalColor = parseInt(crystalColor);
    counter += crystalColor;
    crystalColor.addClass (" crystal image-color");
    crystalColor.text($(this).attr("data-image"));
    $("#display").append(crystalColor);

    console.log("data value",crystalColor)






    alert("New Score" + counter);

    if (counter === targetScore){
        alert("You win")
    }
    else if (counter >= targetScore){
        alert("You lose");
    }

});