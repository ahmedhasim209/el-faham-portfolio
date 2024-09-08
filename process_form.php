<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate email
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);

    if ($email) {
        // Compose email
        $to = "info@elfahham.com";
        $subject = "Add me to News letter";
        $message = "Add me to News letter\n My Email is : $email\n";

        // Send email
        if (mail($to, $subject, $message)) {
            // Redirect after sending email
            header("Location: index.html");
            exit();
        } else {
            echo "Error sending email.";
        }
    } else {
        echo "Invalid email address.";
    }
}
?>
