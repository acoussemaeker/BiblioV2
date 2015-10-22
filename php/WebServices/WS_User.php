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
const Check = 'Check';
const Disconnect = 'Disconnect';
const GET_All ='GetAll';
const GET_User = 'GetUser';
const MODIF_User = 'ModifUser';
const Create_User = 'CreateUser';
const SQL_GET_ALL ="SELECT Id, Pseudo, Password, Mail, Grade FROM user";
const SQL_GET_User = "SELECT Id, Pseudo, Password, Mail, Grade FROM user WHERE Pseudo= '%s'";
const SQL_UPGRADE_User = "UPDATE user SET Pseudo='%s',Password='%s',Mail='%s' WHERE Id= '%d'";
const SQL_CREATE_User = "INSERT INTO user(Pseudo, Password, Mail, Grade) VALUES ('%s', '%s', '%s', '0')";
const SQL_DELETE_User = "";

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
            case Check:
                return $this->Check();
            case Disconnect:
                return $this->Disconnect();
            case MODIF_User:
                return $this->ModifUser();
            case Create_User:
                return $this->CreateUser();
            case GET_All:
                return $this->GetAll();
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
            return false;;
        }
    }

    private function CreateUser()
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

        MySQL::Execute(
            sprintf(SQL_CREATE_User,
                $_REQUEST[PARAM_Login],
                $_REQUEST[PARAM_Password],
                $_REQUEST[PARAM_Mail]
            ));
        return true;
    }


    private function Disconnect()
    {
        session_start();
        $_SESSION['connexion']= null;
        return true;
    }

    private function Check(){
        session_start();
        if(!isset($_SESSION['connexion'])){
            return false;
        }else{
            return true;
        }
    }

    private function GetAll(){
        MySQL::Execute(SQL_GET_ALL);
        $result = MySQL::GetResult()->fetchAll();

        return $result;
    }

    public function doPut() {
        Helper::ThrowAccessDenied();
    }

    public function doDelete() {
        Helper::ThrowAccessDenied();
    }
}

