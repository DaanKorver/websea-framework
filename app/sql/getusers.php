<?php
include '../../webseasdk/database/db.php';

$stmt = $conn->prepare('SELECT * FROM `user`');
$stmt->execute();

$result = $stmt->fetchAll();

foreach( $result as $row ) {
    echo $row['naam']."\n";
}

?>