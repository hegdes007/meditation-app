<?php
    $name = $_POST['name'];
    $email = $_POST ['email'];
    $message = $_POST['message'];

    $recipient = 'hegdes007@rediffmail.com';
    $subject = "New form submission in Meditation-App";
    $formcontent = "User Name: $name \n User Email: $email \n User Message: $message \n";
    $mailheader = "From: Mindfullness app \r\n";
    $mailheader .= "Reply-To: $email \r\n";

    if ($_POST['submit']) {
        $status = mail('hegdes007@rediffmail.com',$subject,$formcontent,$mailheader);
        if($status)
        {
        echo '<p>Your mail has been sent!</p>';
        } else {
        echo '<p>Something went wrong. Please try again!</p>';
        }
    }
    
    header("location: contact.html");
?>
