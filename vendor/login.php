<?php

session_start();
require_once '../connect.php';

$tel = $_POST['tel'];
$password = md5($_POST['password']);

try {
    $sql = "SELECT * FROM `users` WHERE `tel` = :tel AND `password` = :password";
    $stmt = $pdo->prepare($sql);
    $stmt->execute([
        "tel" => $tel,
        "password" => $password
    ]);

    if ($stmt->rowCount() > 0) {
        $_SESSION['user'] = [
            "tel" => $tel
        ];

        header('Location: ../pages/profile.php');
    } else {
        header('Location: /');
    }
} catch (PDOException $e) {
    die("Ошибка! " . $e->getMessage());

    header('Location: /');
}
