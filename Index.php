<?php
if( file_exists("php/Database/db_credentials.php") == true){
    echo'
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
    <body onload="Disconnect()">
        <div class="header navbar navbar-default" id="header" >header</div>
        <div class="menu" id="LeftMenu">menu</div>
        <div class="contain" id="contain">contenu</div>
    </body>
</html>';
}else {
    echo '
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

    <body onload="Disconnect()">
        <center>
            Bienvenue dans l\'application Bibliotheque d\'Arnaud Coussmaeker et d\'Anthony Leloire <br/>
            Cette application est composé des fonctionnalités suivantes: <br/>
            bla bla bli, bla bla bla <br/>
            pour créer et générer votre base de donnée veuillez appuiller sur le bouton suivant <br />

            <table>
            <tr>
            <td>
            lieu
            </td>
            <td>
            <input type="text" id="adresse" value="127.0.0.1">
            </td>
            </tr>
            <tr>
            <td>
            nom database
            </td>
            <td>
            <input type="text" id="nom" value="bibliotheque">
            </td>
            </tr>
            <tr>
            <td>
            login
            </td>
            <td>
            <input type="text" id="login" value="root">
            </td>
            </tr>
            <tr>
            <td>
            password
            </td>
            <td>
            <input type="text" id="password" value="">
            </td>
            </tr>
            </table><input type="button" value="boutton"  onclick="createdatabase()"/>
        </center>
    </body>
</html>';
}
?>


