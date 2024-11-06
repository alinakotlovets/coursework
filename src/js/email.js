// function emailSend(event) {
//     event.preventDefault(); // Зупиняє стандартне відправлення форми
//
//     var email = document.getElementById('email-input').value;
//
//     var messageBody = "Hi, you just subscribed to our website with this email: " + email;
//
//     Email.send({
//         Host: "smtp.elasticemail.com", // Змініть на ваш SMTP-хост
//         Username: "a.kotlovets@lntu.edu.ua", // Ваш логін
//         Password: "838A330A4BF8698602584814C95928F768C8", // Ваш пароль
//         To: email, // Відправка на адресу, введену користувачем
//         From: "a.kotlovets@lntu.edu.ua", // Ваша адреса відправника
//         Subject: "Welcome!",
//         Body: messageBody
//     }).then(
//         message => {
//             if (message === 'OK') {
//                 swal("Successful", "You have subscribed successfully!", "success");
//             } else {
//                 swal("Error", "Something went wrong. Please try again.", "error");
//             }
//         }
//     ).catch(error => {
//         console.error("Error:", error);
//         swal("Error", "An error occurred. Check the console for details.", "error");
//     });
// }