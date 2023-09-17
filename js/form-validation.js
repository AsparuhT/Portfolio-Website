

const errorName = document.querySelector('.errorName');
const errorEmail = document.querySelector('.errorEmail');
const errorMessage = document.querySelector('.errorMessage');


function setError(input, errorEl, errorMsg, isValid) {
    input.classList.add('errorInput');
    errorEl.style.display = 'block';
    errorEl.textContent = errorMsg;
}

function clearError(input, errorEl) {
    input.classList.remove('errorInput');
    errorEl.style.display = 'none';
    errorEl.textContent = '';
}


function validateEmail(email) {
    // Regular expression to test a valid email address
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}




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

    return isValid; // Return the value of the flag
}




// Add event listener that remove warnings when the criteria is met
userName.addEventListener('keyup', () => {
    if (userName.value.length > 0 && userName.value.length < 151) {
        clearError(userName, errorName);
    }
});

userEmail.addEventListener('keyup', () => {
    if (userEmail.value.length > 0 && userEmail.value.length < 151) {
        clearError(userEmail, errorEmail);
    }
});

userMessage.addEventListener('keyup', () => {
    if (userMessage.value.length > 0 && userMessage.value.length < 1500) {
        clearError(userMessage, errorMessage);
    }
});
