
// Ref to the elements that will show warnings if such
const errorName = document.querySelector('.errorName');
const errorEmail = document.querySelector('.errorEmail');
const errorMessage = document.querySelector('.errorMessage');


// Function that adds an error message and styling
function setError(input, errorEl, errorMsg) {
    input.classList.add('errorInput'); // adds a red border to the input
    errorEl.style.display = 'block';  // show the element if hidden before
    errorEl.textContent = errorMsg;  // adds the error message
}

// Function that clears the error messgae(s)
function clearError(input, errorEl) {
    input.classList.remove('errorInput'); // remove the red border from the input
    errorEl.style.display = 'none';      // hide the error element
    errorEl.textContent = '';           // clear the error message
}


// Function that tests for a a valid email address
function validateEmail(email) {
    // Regular expression to test a valid email address format - name@domain.com
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email); // returns true if the string matches and false if not
}



// Function that validates the form fields. it checks for the input size and format and sets errors
function validateInput() {
    let isValid = true; // Initialize flag as true

    if (userName.value === '') { 
        setError(userName, errorName, 'This field is required');
        isValid = false;
    } else if (userName.value.length > 150) {
        setError(userName, errorName, 'Maximum 150 characters');
        isValid = false;
    }

    if (userEmail.value === '') {
        setError(userEmail, errorEmail, 'This field is required');
        isValid = false;
    } else if (!validateEmail(userEmail.value)) { // Check if its actually an email
        setError(userEmail, errorEmail, 'Invalid email address');
        isValid = false;
    } else if (userEmail.value.length > 150) {
        setError(userEmail, errorEmail, 'Maximum 150 characters');
        isValid = false;
    }

    if (userMessage.value === '') {
        setError(userMessage, errorMessage, 'This field is required');
        isValid = false;
    } else if (userMessage.value.length > 1500) {
        setError(userMessage, errorMessage, 'Maximum 1500 characters');
        isValid = false;
    }

    return isValid; // Returns true of no errors
}




// Add event listeners that clear the warnings when the criteria is met
userName.addEventListener('input', () => {
    if (userName.value.length > 0 && userName.value.length < 151) {
        clearError(userName, errorName);
    }
});

userEmail.addEventListener('input', () => { // also remove the warning if the email format is met
    if (userEmail.value.length > 0 && userEmail.value.length < 151 && validateEmail(userEmail.value)) {
        clearError(userEmail, errorEmail);
    }
});

userMessage.addEventListener('input', () => {
    if (userMessage.value.length > 0 && userMessage.value.length < 1500) {
        clearError(userMessage, errorMessage);
    }
});
