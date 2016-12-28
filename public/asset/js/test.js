var video = document.getElementById("video");
var errocb = function () {
    console.log("sth srong");
}
if (navigator.getUserMedia) {
    navigator.getUserMedia({"video": true}, function (stream) {
        video.src = window.URL.createObjectURL(stream);
        video.play();
    }, errocb);
}