<?php
session_start();
$_SESSION['connexion'] = null;
?>

<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <a class="navbar-brand" href="#">
                <img alt="Bibliothèque Audio V2" src="...">
            </a>
            <form class="navbar-form navbar-right" >
                <div class="form-group">
                    <input type="text" class="form-control" id="Login" placeholder="login">
                    <input type="text" class="form-control" id="Password" placeholder="mdp">
                </div>
                <button type="button" class="btn btn-default" onclick="Verif()">login</button>
            </form>
        </div>
    </div>
</nav>