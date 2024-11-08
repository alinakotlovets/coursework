function sendEmail() {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!emailRegex.test(email)) {
        errorMessage.style.display = 'block';
        errorMessage.innerText = 'Write right email';
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 1000);
        return;
    }

    errorMessage.style.display = 'none';

    let params = {
        email: email
    };

    emailjs.send("service_1tuftii","template_m4c31eg", params)
        .then(function (response) {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('subscribe-title').style.display = 'none';
            document.getElementById('overlay').style.display = 'block';
            setTimeout(function() {
                document.getElementById('overlay').style.display = 'none';
            }, 1000);
        })
}


