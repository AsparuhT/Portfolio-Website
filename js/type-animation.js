/**
 * Typing Animation with Pausing and Restarting
 *
 */

const textAreaOne = document.querySelector('#typing-text__one');
const textAreaTwo = document.querySelector('#typing-text__two');


const textPartOne = "Welcome to my portfolio !";
const textPartTwo = "Grab a coffee and let's look around";
// Create counter, staring at 0, so we can add a check against the lenght of the text 
let textOneCurrentCharNum = 0;
let textTwoCurrentCharNum = 0;



const writingSpeed = 80;
let isPaused = false;


/**
 * Function to perform the typing animation for the given text.
 *
 * @param {string} textToType - The text to type.
 * @param {number} indexCounter - The current character index.
 * @param {Element} textArea - The HTML element where the text will be displayed.
 */
function typeText(textToType, indexCounter, textArea) {
    if (!isPaused && indexCounter < textToType.length) {
        textArea.textContent += textToType[indexCounter];
        indexCounter++;

        setTimeout(() => typeText(textToType, indexCounter, textArea), writingSpeed)
    }
}




/**
 * Function to initiate the typing animation sequence.
 */
function callText() {

    textAreaOne.textContent = '';
    textAreaTwo.textContent = '';

    typeText(textPartOne, textOneCurrentCharNum, textAreaOne);


    setTimeout(() => typeText(textPartTwo, textTwoCurrentCharNum, textAreaTwo), 5000);

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


callText();