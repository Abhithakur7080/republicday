var audioElement = document.getElementById("audioElement");
audioElement.autoplay = true;
var promise = audioElement.play();
if (promise !== undefined) {
  promise.then((_) => {}).catch((error) => {});
}
