<?php
    $name = $_POST['name'];
    $email = $_POST ['email'];
    $message = $_POST['message'];

    $formcontent = "User Name: $name \n User Email: $email \n User Message: $message \n";
    $recipient = "hegdes007@rediffmail.com";
    $subject = "New form submission in Meditation-App";
    $mailheader = "From: Mindfullness app \r\n";
    $mailheader .= "Reply-To: $email \r\n";

    mail($recipient,$subject,$formcontent,$mailheader) or die("Error!");
    echo "Thank You!" ;
    
    header("location: contact.html");
?>
