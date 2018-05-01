//1.code for piphy results
//2. .;l,

$("button").on("click", function () {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            for (var i = 0; i < 10; i++) {
                var gifDiv = $("<div class='item'>");

                var rating = results[i].rating;

                var p = $("<p>").text("Rating: " + rating);

                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);

                gifDiv.prepend(p);
                gifDiv.prepend(personImage);

                $("#gifs-appear-here").prepend(gifDiv);
            }
        });
});


$("<img>").on("click", function () {
    //play and stop not working correctly
    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});


var topicImage = $("<img>");
topicImage.attr("src", images.fixed_height_still.url);

topicImage.on("click", function () {
    topicImage.attr("src", images.fixed_height.url);
});



gifDiv.prepend(p);
gifDiv.prepend(topicImage);

$("<img>").prepend(gifDiv);







//search funtion still not working correctly, need a search box
$(document).on('click', '#userChoice', function () {
    if ($('#user-choice').val().trim() == '') {
        alert('Please Make a Selection');
    }
    else {
        var movies = $('#user-choice').val().trim();
        topics.push(movies);
        $('#User-choice').val('');
        renderButtons();
        return false;

    }

});


