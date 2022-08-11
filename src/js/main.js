function sendEmail(){
    Email.send({
        SecureToken: " 0bb50cd1-216f-4ef2-a91a-721dff91a94a",
        To : 'newtonombese1@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form",
        Body : "Name: " + document.getElementById("name").value
            + "<br> Email: " + document.getElementById("email").value
            + "<br> Phone Number: " + document.getElementById("phone").value
            + "<br> Message: " + document.getElementById("texting").value
    }).then(
      message => alert("Message sent successfully")
    );
}