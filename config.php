<?php
try {
    $pdo = new PDO('mysql:host=wlfphdbviadex.mysql.db;dbname=wlfphdbviadex;charset=utf8mb4', 'wlfphdbviadex', 'Action2viadex');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    exit(json_encode(['error' => 'Database connection failed']));
}