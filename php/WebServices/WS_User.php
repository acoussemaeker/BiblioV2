<?php
/**
 * Created by PhpStorm.
 * User: anthony
 * Date: 13/10/2015
 * Time: 21:20
 */
require 'IWebServiciable.php';
include '/Database/db_connect.php';

const PARAM_ACTION = 'action';
const PARAM_Login ='Login';
const PARAM_Password ='Password';
const PARAM_RePassword ='RePassword';
const PARAM_Mail ='Mail';
const PARAM_ReMail ='ReMail';
const GET_Connect = 'Connect';
const GET_User = 'GetUser';
const MODIF_User = 'ModifUser';
const SQL_GET_User = "SELECT Id, Pseudo, Password, Mail, Grade FROM user WHERE Pseudo= '%s'";
const SQL_UPGRADE_User = "UPDATE user SET Pseudo='%s',Password='%s',Mail='%s' WHERE Id= '%d'";


class WS_User implements IWebServiciable {

    public function doGet() {
        return $this->DoPost();
    }

    public function doPost() {

        if (!isset($_REQUEST[PARAM_ACTION]))
            Helper::ThrowAccessDenied();

        switch ($_REQUEST[PARAM_ACTION])
        {
            case GET_Connect:
                return $this->Connect();
            case GET_User:
                return $this->GetUser();
            case MODIF_User:
                return $this->ModifUser();
            default:
                Helper::ThrowAccessDenied();
                break;
        }
    }

    private function Connect()
    {
        MySQL::Execute(
            sprintf(SQL_GET_User,
                $_REQUEST[PARAM_Login]
            ));


        $result = MySQL::GetResult()->fetch();
        if($result == null){
            return false;
        }
        else if($result->Password == $_REQUEST[PARAM_Password]){
            session_start();
            $_SESSION['connexion']=$result;
            return true;
        }else{
            return false;
        }
    }

    private function GetUSer()
    {
        session_start();
        MySQL::Execute(
            sprintf(SQL_GET_User,
                $_SESSION['connexion']->Pseudo
            ));

        $result = MySQL::GetResult()->fetch();
        if($result == null){
            return false;
        }
        else{
            return $result;
        }
    }

    private function ModifUser()
    {
        session_start();
        if (!isset($_REQUEST[PARAM_Password]) ||
            !isset($_REQUEST[PARAM_RePassword]) ||
            !isset($_REQUEST[PARAM_Mail]) ||
            !isset($_REQUEST[PARAM_ReMail]) ||
            !isset($_REQUEST[PARAM_Login]))
        {
            Helper::ThrowRequestError();
        }

        if($_REQUEST[PARAM_Password]==$_REQUEST[PARAM_RePassword] && $_REQUEST[PARAM_Mail]==$_REQUEST[PARAM_ReMail] )
        {
            MySQL::Execute(
            sprintf(SQL_UPGRADE_User,
                $_REQUEST[PARAM_Login],
                $_REQUEST[PARAM_Password],
                $_REQUEST[PARAM_Mail],
                $_SESSION['connexion']->Id
                ));
            return true;
        }
        else{
            return false;
        }
    }


    public function doPut() {
        Helper::ThrowAccessDenied();
    }

    public function doDelete() {
        Helper::ThrowAccessDenied();
    }
}

