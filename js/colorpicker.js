const myColor = ["white", "#FF0000", "#0000FF", "#008000", "#800080", "#FFA500", "#008080"];

// Getting the background class to change the background colour
const myBackground = document.querySelector(".background");
const myColorName = document.querySelector(".color");
const myHeading = document.getElementsByTagName("h4");
const changeColorButton = document.getElementById("changeColorButton");

// Event listener to change the background color randomly
changeColorButton.addEventListener("click", function() {
    let randomColor1 = generateRandomColor();
    // Change the background color
    myBackground.style.backgroundColor = randomColor1;
    // Change the text color
    myColorName.textContent = randomColor1;
});

function generateRandomColor() {
    const randNum = Math.floor(Math.random() * myColor.length);
    return myColor[randNum];
}