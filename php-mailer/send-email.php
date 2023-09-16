<?php

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// First, check the reCaptcha response
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $recaptchaResponse = $_POST['g-recaptcha-response'];

    // Verify reCAPTCHA
    $recaptchaSecret = '6LcjiCkoAAAAAHi7a13IRQQj3zz-jova20pV74Wj';
    $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $recaptchaSecret . '&response=' . $recaptchaResponse);
    $responseData = json_decode($verifyResponse);

    // Log the complete response (useful for debugging)
    //error_log('reCAPTCHA response: ' . print_r($responseData, true));

    if (!$responseData->success) {
        // reCAPTCHA verification failed
        echo 'reCAPTCHA verification failed. Please try again.';
        exit;
    }


    // Get the form data and proceed with the email sending

    // Sanitize and validate user input
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);


    if (empty($name) || empty($email) || empty($message)) {
        // Redirect or output an error message
        die('Invalid input');
    }



    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->SMTPAuth = true;
        $mail->Host = "mail.atenev.com";
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;
        $mail->Username = "info@atenev.com";
        $mail->Password = "tB@$3gm6@kg}";

        $mail->setFrom('info@atenev.com', "My website"); // The email address the form sends from
        $mail->addAddress("info@atenev.com"); //This is the email address where the email will be sent to
        $mail->addReplyTo($email, $name); // The replay will be sent to the filled in email address


        // The email subject
        $mail->Subject = 'A new email from ' . $name;
        // The email body
        $mail->Body = 'Sent from: ' . $name . "\r\n \r\n" .
            "Sender's email: " . $email . "\r\n \r\n" .
            "Message: " . $message;


        $mail->send();

        // echo "The Email has been sent successfully";
        // header("Location: ../contacts.php");   Redirect after the email has been sent
        echo 'Success'; // Return success message
        exit(); // Terminate the script to make sure the header redirect works
    } catch (Exception $e) {
        echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
    }
}
