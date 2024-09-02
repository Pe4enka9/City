<?php

$host = 'MySQL-8.2';
$dbname = 'city';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;", $username, $password);
} catch (PDOException $e) {
    die("Ошибка! " . $e->getMessage());
}
