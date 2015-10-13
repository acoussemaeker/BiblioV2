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
    "Login" => $_POST['Login'],
    "Password" => $_POST['Password'],
];

$ws_instance = new $className($array);
//$ws_security = new WS_Securities();

//if($ws_instance->doNeedAuth())
//    if(!$ws_security->isAuth())
//        return 'error';

$method = "do".strtoupper($_SERVER['REQUEST_METHOD']);

$ws_response = $ws_instance->$method();


//switch ($_SERVER['REQUEST_METHOD']) {
//    case 'PUT':
//        $ws_response = $ws_instance->doPut();
//        break;
//    case 'DELETE':
//        $ws_response = $ws_instance->doDelete();
//        break;
//    case 'GET':
//        $ws_response = $ws_instance->doGet();
//        break;
//    case 'POST':
//        $ws_response = $ws_instance->doPost();
//        break;
//
//    default:
//        break;
//}


session_start();
$_SESSION['connexion'] = "$ws_response";

return $ws_response;