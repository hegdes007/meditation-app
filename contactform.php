<?php
    $name = $_POST['name'];
    $email = $_POST ['email'];
    $message = $_POST['message'];

    $formcontent = "User Name: $name \n User Email: $email \n User Message: $message \n";
    $recipient = "hegdes123@gmail.com";
    $subject = "New form submission in Meditation-App";
    $mailheader = "From: $email \r\n";
    
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!" ;
    
    header("Location: contact.html");
?>
