//declare global variables
var startArray = ["Chocolate", "Elf", "Candy", "Candy Cane", "Snow", "Presents", "Christmas Tree", "Puppy", "North Pole", "Penguin"];
var newImg
var playImg

//displays buttons to screen
var displayButtons = function () {
    var gifBtn = $(".gif-btn");

    gifBtn.empty();
    
    for (var i in startArray) {
        var btn = $("<button class = 'btn-primary'>");
        var buttonName = startArray[i];
        var btnWithName = btn.text(buttonName);
        gifBtn.append(btnWithName);
    }
}

//accepts typing in form and creates a new gif button
var newGifFunction = function () {
    event.preventDefault();

    startArray.push($("#gif-input").val());

    displayButtons();
}

//displays Gif from text displayed on button and feeds to API
//loads still and displays to screen first
//loads gif in background, hidden with a 'hidden' class
var displayGif = function () {

    $(".gif-view").empty();

    var buttonText = $(this).text();

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hL0XQEPSXJzR5vl0umxiL9OKnk25I8iU&q=" + buttonText + "&limit=10&lang=en"

    $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function(response) {

        var newDiv = $("<div class = 'response-data'>");

        for ( var i in response.data) {

            var newDiv = $("<div class = gifDiv" + i +" >");
            var newP = $("<h3>").text("Rating: " + response.data[i].rating);
            
            newImg = $("<img class = 'Image stillImage'>").attr("src", response.data[i].images.fixed_height_still.url);
            playImg = $("<img class = 'Image playImage hidden'>").attr("src", response.data[i].images.fixed_height.url);

            newDiv.addClass("newGifs");

            newDiv.append(newP).append(newImg).append(playImg);

            $(".gif-view").append(newDiv);

            };

        });  
}

//toggles 'hidden' CSS class on and off
var togglePlay = function () {
    $(this).find('.stillImage').toggleClass('hidden');
    $(this).find('.playImage').toggleClass('hidden');
}

//listeners and event calls
$("#add-gif").on("click", newGifFunction);
$(document).on("click", ".btn-primary", displayGif);
$(document).on("click", ".newGifs", togglePlay);

displayButtons();
