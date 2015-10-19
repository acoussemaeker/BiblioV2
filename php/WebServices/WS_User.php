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
const GET_Connect = 'Connect';
const GET_User = 'GetUser';
const SQL_GET_User = "SELECT id, Pseudo, Password, Grade FROM user WHERE Pseudo= '%s'";


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
            default:
                Helper::ThrowAccessDenied();
                break;
        }
    }

    private function Connect()
    {
        if(!isset($_REQUEST[PARAM_Login]))
        {
            Helper::ThrowAccessDenied();
        }
        else{
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


    public function doPut() {
        Helper::ThrowAccessDenied();
    }

    public function doDelete() {
        Helper::ThrowAccessDenied();
    }
}

