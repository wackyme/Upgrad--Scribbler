/* Code for Trash Modal */
var showPosts = function(numberOfPosts) {

    for (var i = 0; i < numberOfPosts; i++) {
        // To display trash screen
        var screen = document.getElementsByClassName('del-post')[i];

        // To display div to open the screen
        var div = document.getElementsByClassName("trash")[i];

        // To display <span> element that closes the screen
        var close = document.getElementsByClassName("del-button-no")[i];

        // To open the screen,when the user clicks on the trash icon.
        div.onclick = function() {
            screen.style.display = "block";
        }

        // To close the screen,when the user clicks on `No` button.
        close.onclick = function() {
            screen.style.display = "none";
        }
    }
}

showPosts(5)

function navigateToPost() {
    location.href = "post.html";
}