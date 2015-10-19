<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" href="Css/bootstrap.min.css"/>
        <link rel="stylesheet" href="Css/Style.css"/>
        <script src="Js/jquery-1.11.3.min.js"></script>
        <script src="Js/Script.js"></script>
        <title>index</title>
    </head>
    <body onload="Start()">
        <div class="header navbar navbar-default" id="header" >header</div>
        <div class="menu">menu</div>
        <div class="contain" id="contain">contenu</div>
    </body>
</html>

<?php
//session_start();
//$_SESSION['connexion'] = null;

include "php/Database/db_credentials.php";
include "php/ViewController.php";
