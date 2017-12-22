var startArray = ["surf", "skimboard", "corgi", "mountain", "pizza", "kayak", "hike", "overwatch", "music", "football"];

var displayButtons = function () {
    var gifBtn = $(".gif-btn");

    gifBtn.empty();
    event.preventDefault();
    
    for (var i in startArray) {
        var btn = $("<button class = 'btn-primary'>");
        var buttonName = startArray[i];
        var btnWithName = btn.text(buttonName);
        gifBtn.append(btnWithName);
    }
}

$("#add-gif").on("click", displayButtons);