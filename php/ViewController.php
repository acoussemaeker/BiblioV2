<?php
/**
 * Created by PhpStorm.
 * User: anthony
 * Date: 13/10/2015
 * Time: 19:41
 */
session_start();
switch($_SESSION['connexion']){
    case null : echo"<script>Start()</script>"; break;
    default : echo"<script>UserLogged()</script>"; break;
}