<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit(0);
}

require 'config.php';

$uri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
$route = $uri[0] ?? null;

$allowedRoutes = ['blogpost', 'contact', 'user', 'meeting', 'blograw'];

if (in_array($route, $allowedRoutes)) {
    require "routes/$route.php";
} else {
    http_response_code(404);
    echo json_encode(['error' => 'Not Found']);
}