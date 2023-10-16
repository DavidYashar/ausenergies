<?php
include_once 'forms.php';


header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Origin:*');

$conn = mysqli_connect('localhost', 'root', '','oop' );

if(!$conn){
    die("Connection failed: " . mysqli_connect_error());
    
}else{
    echo "Connected successfully";
}

$form = new Aus;
$form->insertData();

?>
