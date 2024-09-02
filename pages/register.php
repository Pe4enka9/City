<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/main.css">
    <title>Регистрация</title>
</head>

<body>
    <form action="" id="form">
        <div class="background"></div>

        <h1>Регистрация</h1>

        <div class="input_wrapper">
            <div class="wrapper tel_wrapper">
                <input type="tel" name="tel" id="tel" placeholder="Введите номер телефона">
            </div>

            <div class="wrapper email_wrapper">
                <input type="email" name="email" id="email" placeholder="Введите свою эл. почту">
            </div>

            <div class="wrapper username_wrapper">
                <input type="text" name="username" id="username" placeholder="Введите своё имя">
            </div>

            <div class="wrapper lastName_wrapper">
                <input type="text" name="lastName" id="lastName" placeholder="Введите свою фамилию">
            </div>

            <div class="wrapper bday_wrapper">
                <input type="date" name="bday" id="bday" placeholder="Введите свою дату рождения">
            </div>

            <div class="wrapper password_wrapper">
                <input type="password" name="password" id="password" placeholder="Введите пароль">
            </div>

            <div class="wrapper password_repeat_wrapper">
                <input type="password" id="password_repeat" placeholder="Повторите пароль">
            </div>
        </div>

        <input type="submit" id="btn" value="Зарегистрироваться">
    </form>
</body>

</html>