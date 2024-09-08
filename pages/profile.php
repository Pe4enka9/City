<?php
session_start();

if (!isset($_SESSION['user'])) {
    header('Location: /');
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
    <link rel="stylesheet" href="../css/profile.css">
    <title>Профиль</title>
</head>

<body>
<div class="wrapper">
    <header>
        <div class="background">
            <div class="icons">
                <a href="../vendor/logout.php"><img src="../svg/icon_exit.svg" id="logout" alt="Выход"></a>

                <img src="../svg/settings.svg" id="settings" alt="Настройки">
            </div>

            <div class="avatar"></div>
        </div>
    </header>

    <main>
        <span id="status">онлайн</span>
        <span id="more">Подробнее <img src="../svg/info.svg" alt="Подробнее"></span>

        <div class="full_name">ФИО</div>

        <nav>
            <div class="navigation">
                <img src="../svg/icon_news.svg" alt="Новости">
                Новости
            </div>
            <div class="navigation">
                <img src="../svg/icon_friends.svg" alt="Друзья">
                Друзья
            </div>
            <div class="navigation">
                <img src="../svg/icon_music.svg" alt="Музыка">
                Музыка
            </div>
            <div class="navigation">
                <img src="../svg/icon_groups.svg" alt="Группы">
                Группы
            </div>
            <div class="navigation">
                <img src="../svg/icon_video.svg" alt="Видео">
                Видео
            </div>
            <div class="navigation">
                <img src="../svg/icon_shop.svg" alt="Магазин">
                Магазин
            </div>
        </nav>
    </main>
</div>
</body>

</html>