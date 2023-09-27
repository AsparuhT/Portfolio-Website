/**
 * Typing Animation with Pausing and Restarting
 *
 */

// Ref to the elements where the text will apepar
const textAreaOne = document.querySelector('#typing-text__one');
const textAreaTwo = document.querySelector('#typing-text__two');

// The text that willl be written on the page
const textPartOne = "Welcome to my portfolio !"; // line one
const textPartTwo = "Grab a coffee and let's look around";  // line two

// Create counter, staring at 0, so we can add a check against the lenght of the text 
let textOneCurrentCharNum = 0;
let textTwoCurrentCharNum = 0;



const writingSpeed = 80;
let isPaused = false; // flag used for the document's visibilitychange


/**
 * Function to perform the typing animation for the given text.
 */

function typeText(textToType, indexCounter, textArea) {
    if (!isPaused && indexCounter < textToType.length) {
        // Add each latter to the previous one, using their index number
        textArea.textContent += textToType[indexCounter];
        indexCounter++;
        // Add each latter at the specified time interval
        setTimeout(() => typeText(textToType, indexCounter, textArea), writingSpeed)
    }
}




/**
 * Function to initiate the typing animation sequence.
 */
function callText() {
    // Make sure the text areas are cleared
    textAreaOne.textContent = '';
    textAreaTwo.textContent = '';
    // Call the first part of thext here
    typeText(textPartOne, textOneCurrentCharNum, textAreaOne);

    // Call the second part here, after 5s
    setTimeout(() => typeText(textPartTwo, textTwoCurrentCharNum, textAreaTwo), 5000);
    // Start all over after 12s
    setTimeout(callText, 12000);
}


// Pause the typing animation when the user switches to another tab
document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") {
        isPaused = true;
    } else {
        isPaused = false;
    }
});

// Initialize the typing animation
callText();