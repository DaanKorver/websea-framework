<?php

$strJsonFileContents = file_get_contents("../../config/database.json");
$dbCofigArray = json_decode($strJsonFileContents, true);

$host = $dbCofigArray['host'];
$database = $dbCofigArray['database'];
$username = $dbCofigArray['username'];
$password = $dbCofigArray['password'];

try {
    $conn = new PDO("mysql:host=$host;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);   

    } catch(PDOException $e) {
    echo 'ERROR: ' . $e->getMessage();
}

?>