<?php
/**
 * Created by PhpStorm.
 * User: anthony
 * Date: 13/10/2015
 * Time: 19:41
 */

include_once '../WebServices/WS_Connexion.php';
//GEstion d'erreur
$className = "WS_Connexion";

$array = [
    "Login" => $_REQUEST['Login'],
    "Password" => $_REQUEST['Password'],
];

$ws_instance = new $className($array);

$method = "do".strtoupper($_SERVER['REQUEST_METHOD']);


$ws_response = json_encode($ws_instance->$method());
echo $ws_response;