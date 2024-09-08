<?php
session_start();
require_once './connect.php';

if (isset($_SESSION['user'])) {
    header('Location: ./pages/profile.php');
}
?>

<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-B8VDZ6MFS5"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());

        gtag('config', 'G-B8VDZ6MFS5');
    </script>
    <link rel="stylesheet" href="./css/main.css">
    <title>Авторизация</title>
</head>

<body>
<form action="./vendor/login.php" method="post" id="form">
    <div class="background">
        <div class="logo"></div>
        <div class="houses"></div>
    </div>

    <h1>Авторизация</h1>

    <div class="input_wrapper">
        <div class="wrapper tel_wrapper">
            <input type="text" name="tel" id="tel" placeholder="Введите номер телефона">
            <?php
            if (isset($_SESSION['errorLoginPassword'])) {
                echo $_SESSION['errorLoginPassword'];
                unset($_SESSION['errorLoginPassword']);
            }
            ?>
        </div>

        <div class="wrapper password_wrapper">
            <input type="password" name="password" id="password" placeholder="Введите пароль">
            <div class="password_eye password_hide"></div>
        </div>
    </div>

    <input type="submit" id="btn" value="Войти">

    <span>Ещё нет аккаунта? <a href="./pages/register.php">Зарегистрироваться!</a></span>
</form>

<script src="./js/main.js"></script>
</body>

</html>