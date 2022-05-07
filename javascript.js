// Increase width when grow button clicked
document.getElementById("growButton").addEventListener("click", function growButton() {
    document.getElementById("box").style.width = "300px";
});
//Resets back to original styling when reset button clicked
document.getElementById("resetButton").addEventListener("click", function resetButton() {
    document.getElementById("box").style.width = "150px";
    document.getElementById("box").style.opacity = '100%';
    document.getElementById("box").style.background = 'orange';
    document.getElementById("box").style.border = 0;

});
// Changes opacity to 50% when fade button clicked
document.getElementById("fadeButton").addEventListener("click", function fadeButton() {
    document.getElementById("box").style.opacity = '50%';
});

// Changes background to blue when bly button clicked
document.getElementById("blueButton").addEventListener("click", function blueButton() {
   document.getElementById("box").style.background = 'blue';
});

// Adds border when outline button clicked
document.getElementById("outlineButton").addEventListener("click", function outlineButton() {
    document.getElementById("box").style.border = '10px solid white';
 });


// Define andom color array
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// Get button
let randomColorButton = document.getElementById('randomColorButton')

// Add event listener
randomColorButton.addEventListener('click', function() {
    // Get random color
    var randomColor = colors[Math.floor(Math.random() * colors.length)]
    // Get box
    let box = document.getElementById('box');
    // Style box
    box.style.background = randomColor
    
 })
 