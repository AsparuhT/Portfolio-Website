

// Add event listener to it that listens for form submit
// We don't use arrow function here, because the this kework does not work with it
form.addEventListener('submit', function (e) {
    e.preventDefault();

    console.log('The listener is active and the form submission prevented');

    /*
    * We will handle the form, using the FormData object.
    * We pass the 'this' keyword as paramenter, which in this case holds all the form fields in the
    * form element, along with their current values. This is reference to the form itself
    * That way, the FormData onject has the form values, making it easy for us to pass them to the    * backend code using the fetch API
    */
    const formData = new FormData(this);



    // Log form data to console for debugging
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }


    //We can make the fetch request now, to the PHP fille that will handle the form submission
    fetch('../php-mailer/send-mail.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text()) // Handle the response when it comes back
        .then(text => {          // We will receive the response in text format
            console.log(text);   // Sent by the PHP echo
        })
        .catch(error => {
            console.log('There was a problem with the fetch operation:', error);
        })
})
