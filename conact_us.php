<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate inputs
    $name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $phone = filter_input(INPUT_POST, 'number', FILTER_VALIDATE_EMAIL);
    $messageContent = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

    if ($name && $email && $messageContent) {
        // Compose email
        $to = "info@elfahham.com";
        $subject = "New Message from $name";
        $message = "You have received a new message from $name\n\n";
        $message .= "Email: $email\n";
        $message .= "Email: $phone\n";
        $message .= "Message: $messageContent\n";

        // Send email
        if (mail($to, $subject, $message)) {
            // Redirect after sending email (optional)
            header("Location: index.html");
            exit();
        } else {
            // Handle email sending failure
            echo "Failed to send email. Please try again later.";
        }
    } else {
        // Handle invalid inputs
        echo "Invalid input. Please ensure all fields are filled correctly.";
    }
}
?>