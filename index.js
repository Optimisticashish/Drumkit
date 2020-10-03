//Detecting Button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    animation(buttonInnerHTML);
  });

}
// Detecting Keyboard press
document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  animation(event.key);
});
// Make sound
function makeSound(key) {

  switch (key) {
    case "w":
      var boom = new Audio("sounds/boom.wav");
      boom.play();
      break;
    case "a":
      var clap = new Audio("sounds/clap.wav");
      clap.play();
      break;
    case "s":
      var hihat = new Audio("sounds/hihat.wav");
      hihat.play();
      break;
    case "d":
      var kick = new Audio("sounds/kick.wav");
      kick.play();
      break;
    case "j":
      var openhat = new Audio("sounds/openhat.wav");
      openhat.play();
      break;
    case "k":
      var ride = new Audio("sounds/ride.wav");
      ride.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.wav");
      snare.play();
      break;

    default:
      console.log(key);

  }

}
function animation(currentKey){

  var activeButton = document.querySelector("."+currentKey);

  activeButton.classList.add("pressed");

  setTimeout( function() {
    activeButton.classList.remove("pressed");
  },100);
}
