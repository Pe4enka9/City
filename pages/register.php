<?php
session_start();
require_once '../connect.php';

if (isset($_SESSION['user'])) {
    header('Location: ./profile.php');
}
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/register.css">
    <title>Регистрация</title>
</head>

<body>
    <form action="../vendor/create.php" method="post" id="form">
        <div class="background">
            <div class="logo"></div>
            <div class="houses"></div>
        </div>

        <h1>Регистрация</h1>

        <div class="input_wrapper">
            <div class="wrapper tel_wrapper">
                <input type="text" name="tel" id="tel" placeholder="Введите номер телефона" autocomplete="off">
            </div>

            <div class="wrapper email_wrapper">
                <input type="email" name="email" id="email" placeholder="Введите свою эл. почту" autocomplete="off">
            </div>

            <div class="wrapper username_wrapper">
                <input type="text" name="username" id="username" placeholder="Введите своё имя" autocapitalize="off">
            </div>

            <div class="wrapper lastName_wrapper">
                <input type="text" name="lastName" id="lastName" placeholder="Введите свою фамилию" autocomplete="off">
            </div>

            <div class="wrapper bday_wrapper">
                <input type="date" name="bday" id="bday" placeholder="Введите свою дату рождения">
            </div>

            <div class="wrapper password_wrapper">
                <input type="password" name="password" id="password" placeholder="Введите пароль" autocomplete="off">
            </div>

            <div class="wrapper password_repeat_wrapper">
                <input type="password" id="password_repeat" placeholder="Повторите пароль" autocomplete="off">
            </div>
        </div>

        <input type="submit" id="btn" value="Зарегистрироваться">

        <span>Уже есть аккаунт? <a href="/">Авторизоваться!</a></span>
    </form>
</body>

</html>