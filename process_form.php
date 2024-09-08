<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Compose email
    $to = "info@elfahham.com";
    $subject = "Add me to News letter";
    $message = "Add me to News letter\n My Email is : $email\n";
    // Send email
    mail($to, $subject, $message);

    // Redirect after sending email (optional)
    header("Location: index.html");
    exit();
}