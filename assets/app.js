var startArray = ["surf", "skimboard", "corgi", "mountain", "pizza", "kayak", "hike", "overwatch", "music", "football"];

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

displayButtons();

$("#add-gif").on("click", newMovie);