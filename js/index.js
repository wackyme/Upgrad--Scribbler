function showCreatePost() {
    var screen = document.getElementById("create-post-screen");
    screen.style.display = "flex";
}

function hideCreatePostScreen() {
    var screen = document.getElementById("create-post-screen");
    screen.style.display = "none";
}

function navigateToBlogList() {
    location.href = "html/bloglist.html"
}