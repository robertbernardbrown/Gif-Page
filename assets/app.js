var startArray = ["America", "Brazil", "Antartica", "Costa Rica", "Portugal", "Australia", "France", "Iran", "Japan", "Egypt"];
var newImg
var playImg


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
            var newP = $("<p>").html("<h3> Rating: " + response.data[i].rating + "</h3>");
            
            newImg = $("<img class = 'Image stillImage'>").attr("src", response.data[i].images.fixed_height_still.url);
            playImg = $("<img class = 'Image playImage hidden'>").attr("src", response.data[i].images.fixed_height.url);

            newImg.attr('id', response.data[i].id);
            playImg.attr('id', response.data[i].id);
            newImg.attr('data',response.data[i].id);
            playImg.attr('data', response.data[i].id);

            newDiv.addClass("newGifs");

            newDiv.append(newP).append(newImg).append(playImg);

            $(".gif-view").append(newDiv);

            };

        });  
}

var togglePlay = function () {
    $(this).find('.stillImage').toggleClass('hidden');
    $(this).find('.playImage').toggleClass('hidden');
}


$("#add-gif").on("click", newMovie);
$(document).on("click", ".btn-primary", displayGif);
$(document).on("click", ".newGifs", togglePlay);

displayButtons();
