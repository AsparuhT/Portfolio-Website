<?php

// Sanitize and validate user input
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
$subject = filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_STRING);
$message = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    // Redirect or output an error message
    die('Invalid input');
}

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->Host = "smtp.example.com";
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;
    $mail->Username = "you@example.com";
    $mail->Password = "password";
    
    $mail->setFrom($email, $name); // The email address and name  the user filled in
    $mail->addAddress("dave@example.com"); //This is the email address where the email will be sent
    $mail->addReplyTo($email, $name); // The replay will be sent to the filled in email address


    $mail->Subject = $subject;
    $mail->Body = $message;

    $mail->send();

    echo "The Email has been sent successfully";
    header("Location: sent.html");  // Redirect after the email has been sent
    exit(); // Terminate the script to make sure the header redirect works
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
