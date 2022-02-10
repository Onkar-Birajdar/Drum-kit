var numberOfDrums = document.querySelectorAll(".drum").length;
var audioFile = [
    "./sounds/crash.mp3",
    "./sounds/kick.mp3",
    "./sounds/snare.mp3",
    "./sounds/tom1.mp3",
    "./sounds/tom2.mp3",
    "./sounds/tom3.mp3",
    "./sounds/tom4.mp3",
];
for (var i = 0; i < numberOfDrums; i++) {
    document
        .querySelectorAll(".drum")
        [i].addEventListener("click", function () {
            
            makeSound(this.innerHTML);
            buttonAnimation(this.innerHTML);
        });
}
document.addEventListener("keydown", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});
function buttonAnimation(key) {
    var className = "." + key;
    document.querySelector(className).classList.add("pressed");

    setTimeout(function () {
        document.querySelector(className).classList.remove("pressed");
    },100);
}   
function makeSound(key) {
    switch (key) {
        case "w":
            var crash = new Audio(audioFile[0]);
            crash.play();
            break;
        case "a":
            var kick = new Audio(audioFile[1]);
            kick.play();
            break;
        case "s":
            var snare = new Audio(audioFile[2]);
            snare.play();
            break;
        case "d":
            var tom1 = new Audio(audioFile[3]);
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio(audioFile[4]);
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio(audioFile[5]);
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio(audioFile[6]);
            tom4.play();
            break;
        default:
            console.log(buttonInnerHtml);
    }
}
// var audio2 = new Audio(audioFile[1]);
// function playSound() {
//     console.log("Hello world");
//     audio2.play();
// }
// var img = document.getElementsByClassName("drum");
// var style = img.currentStyle || window.getComputedStyle(img, false);
// var bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
// console.log(bi);    