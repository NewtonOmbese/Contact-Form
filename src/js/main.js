function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "newtonombese1@gmail.com",
        Password : 39305520,
        To : 'newtonjillianjillo@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact Form",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}