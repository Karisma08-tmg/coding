let button = document.getElementById("welcomeBtn");
button.onclick = function() {
    alert("🎵 Welcome to FEEL EVERY BEAT!\n\nEnjoy listening to your favorite artists!");
}
document.addEventListener("visibilitychange", function(){
    if(document.hidden) {
        document.title = "Come Back 🎵";

    }
    else {
        document.title = "FEEL EVERY BEAT";
    }
});