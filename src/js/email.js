function sendEmail() {
    const email = document.getElementById('email').value;
    const errorMessage = document.getElementById('error-message');

    // Регулярний вираз для перевірки формату email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    // Перевіряємо, чи підходить email під шаблон
    if (!emailRegex.test(email)) {
        errorMessage.style.display = 'block';
        errorMessage.innerText = 'Введіть правильну пошту';
        return; // Зупиняємо виконання, якщо формат неправильний
    }

    // Якщо формат правильний, ховаємо повідомлення про помилку
    errorMessage.style.display = 'none';

    // Відправляємо email через EmailJS
    let params = {
        email: email
    };

    emailjs.send("service_1tuftii","template_m4c31eg", params)
        .then(function (response) {
            document.getElementById('contact-form').style.display = 'none';
            document.getElementById('overlay').style.display = 'block';
        })
}

// Функція для показу повідомлення
// function showMessage(id) {
//     var message = document.getElementById(id);
//     message.style.display = 'block';
//
//     // Приховуємо повідомлення через 10 секунд
//     setTimeout(() => {
//         message.style.display = 'none';
//     }, 1000); // 10000 мілісекунд = 10 секунд
// }
