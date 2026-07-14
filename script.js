let button = document.getElementById("welcomeBtn");
button.addEventListener("click", function () {
    alert("🎵 Welcome to Purple Playlist!\n\nEnjoy exploring your favorite artists and songs.");

});

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        document.title = "Come back to Purple Playlist 🎵";
    } else {
        document.title = "Purple Playlist";
    }
});
