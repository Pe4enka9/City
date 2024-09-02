<?php

require_once '../connect.php';

$tel = $_POST['tel'];
$email = $_POST['email'];
$username = $_POST['username'];
$lastName = $_POST['lastName'];
$bday = $_POST['bday'];
$password = md5($_POST['password']);

try {
    $sql = "INSERT INTO `users` (`id`, `tel`, `email`, `username`, `lastName`, `bday`, `password`)
    VALUES (NULL, :tel, :email, :username, :lastName, :bday, :password)";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        "tel" => $tel,
        "email" => $email,
        "username" => $username,
        "lastName" => $lastName,
        "bday" => $bday,
        "password" => $password
    ]);

    header('Location: /');
} catch (PDOException $e) {
    die("Ошибка! " . $e->getMessage()); // По окончанию работы убрать!

    header('Location: ../pages/register.php');
}
