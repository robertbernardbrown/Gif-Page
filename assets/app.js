var startArray = ["surf", "skimboard", "corgi", "mountain", "pizza", "kayak", "hike", "overwatch", "music", "football"];
var gifId

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


var newMovie = function () {
    event.preventDefault();

    startArray.push($("#gif-input").val());

    displayButtons();
}


var displayGif = function () {
    var buttonText = $(this).text();

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hL0XQEPSXJzR5vl0umxiL9OKnk25I8iU&q=" + buttonText + "&limit=10&lang=en"

    $.ajax({
        url: queryURL,
        method: "GET"
        }).done(function(response) {

        var newDiv = $("<div class = 'response-data'>");

        for ( var i in response.data) {

            var newDiv = $("<div class = gifDiv" + i +" >");
            var newP = $("<p>").html("<h3> Rating: " + response.data[i].rating + "</h3>");
            
            var newImg = $("<img class = 'stillImage'>").attr("src", response.data[i].images.fixed_height_still.url);
            var playImg = $("<img class = 'playImage hidden'>").attr("src", response.data[i].images.fixed_height.url);

            newImg.addClass(response.data[i].id);
            playImg.addClass(response.data[i].id);
            gifId = response.data[i].id;

            newDiv.addClass("newGifs");

            newDiv.append(newP).append(newImg).append(playImg);

            $(".gif-view").append(newDiv);

            };

        });  
}

var togglePlay = function () {

    $(this).toggleClass('hidden');
    $(this).toggleClass('hidden');

}


$("#add-gif").on("click", newMovie);
$(document).on("click", ".btn-primary", displayGif);
$(document).on("click", ".newGifs", togglePlay);

displayButtons();
