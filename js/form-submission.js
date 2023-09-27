// Get reference to the form and its error div
const form = document.getElementById('form');
const formError = document.querySelector('.formError');

// Function to run after reCAPTCHA validation
function onSubmit(token) {

    // First, validate the inputs
    if (!validateInput()) {
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.reset(); // Reset reCAPTCHA
        // If the reCatcha is not reset here, the form will not resubmit after the first attempt
        }
        return;
    }
    
    // Capture the form data
    const formData = new FormData(form);
    // Clear the inputs after the form data is captured and start the spinner
    clearInputs();
    showSpinner();

    // Pass the data to the php file
    fetch('php-mailer/send-email.php', {
        method: 'POST',
        body: formData
    })
        .then(res => {
            if(!res.ok) {
                throw new Error('Form could not be submitted');
            }
            return res.text();
        })
        .then(text => {
            // Hide spinner
            hideSpinner();
            formError.textContent = ''; // clear the form error if it was there
            showSuccessMessage(); // show success popup overlay
            // Reset the reCaptcha in order to allow resubmission
            grecaptcha.reset();
        })
        .catch(error => {
            // let the user know there was an error
            hideSpinner();
            formError.textContent = 'Form could not be submitted. Try again later.';
            console.log('There was a problem with the fetch operation:', error);
        });

}

// Attach event listener to the form
form.addEventListener('submit', function (e) {
    e.preventDefault();
    // Trigger reCAPTCHA check, which will call 'onSubmit' upon success
});






// Clear the inputs
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userMessage = document.getElementById('message');

function clearInputs() {
    userName.value = '';
    userEmail.value = '';
    userMessage.value = '';
}



// Hide and show the spinnner
const spinner = document.getElementById("spinner");
const sendMsg = document.getElementById("sendMsg"); // the Send button
function showSpinner() {
    sendMsg.style.display = 'none';         // remove the Send' button text
    spinner.style.display = 'inline-block'; // Show the spinner
}

function hideSpinner() {
    sendMsg.style.display = 'inline-block'; // Put the button's text back to Send
    spinner.style.display = 'none';         // Hide the spinner
}



// Get the overlay and popup elements
const overlay = document.getElementById('overlay');
const successPopup = document.getElementById('successPopup');
// Get the close button element
const closePopupButton = document.getElementById('closePopup');

// Add a popup message and overlay
function showSuccessMessage() {
    // Show overlay and popup
    overlay.style.display = 'block';
    successPopup.style.display = 'block';
}


// Close the popup and remove the overlay
function hidePopup() {
  overlay.style.display = 'none';
  successPopup.style.display = 'none';
}

// Add click event listener to close button
closePopupButton.addEventListener('click', function() {
  hidePopup();
});