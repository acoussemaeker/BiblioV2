<?php
/**
 * Created by PhpStorm.
 * User: anthony
 * Date: 13/10/2015
 * Time: 21:31
 */
class BddAccess {

    public static function getInstance() {
        $hote='127.0.0.1';
        $user='root';
        $passwd='';
        $database='bibliothequeaudio';
        $cnx=new mysqli($hote,$user,$passwd,$database);
        $cnx->set_charset("utf8");
        return $cnx;
    }
}