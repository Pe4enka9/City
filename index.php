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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,100..900&display=swap" rel="stylesheet">
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