var text = "Save the Earth";
var speed = 100; // Adjust the speed of typing 
var i = 0;

function typeWriting() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i); //charAt(i) i refers to a specific position in text str
        i++;
        setTimeout(typeWriting, speed);
    }
}

// Call the typeWriter function 
document.addEventListener("DOMContentLoaded", function () {
    typeWriting();
});



