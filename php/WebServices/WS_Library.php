<?php
/**
 * Created by PhpStorm.
 * User: anthony
 * Date: 20/10/2015
 * Time: 08:36
 */
require 'IWebServiciable.php';
include '/Database/db_connect.php';

const PARAM_ACTION = 'action';
const GET_Library = "GetLibrary";
const GET_Library_Client = "GetLibraryClient";
const SQL_GET_LIBRARY ="SELECT Id, Nom, Emplacement FROM audio";
const SQL_GET_LIBRARY_CLIENT ="SELECT Nom, Emplacement FROM audio LEFT JOIN useraudio On audio.Id = useraudio.AudioId WHERE useraudio.UserId= '%s'";

class WS_Library implements IWebServiciable {

    public function doGet() {
        return $this->DoPost();
    }

    public function doPost() {

        if (!isset($_REQUEST[PARAM_ACTION]))
            Helper::ThrowAccessDenied();

        switch ($_REQUEST[PARAM_ACTION])
        {

            case GET_Library :
                return $this->GetLibrary();
            case GET_Library_Client :
                return $this->GetLibraryClient();
            default:
                Helper::ThrowAccessDenied();
        }
    }

    private function GetLibrary(){
        MySQL::Execute(SQL_GET_LIBRARY);
        return MySQL::GetResult()->fetchAll();
    }

    private function GetLibraryClient(){
        session_start();
        MySQL::Execute(sprintf(SQL_GET_LIBRARY_CLIENT,
                $_SESSION['connexion']->Id
            ));

        $result = MySQL::GetResult()->fetchAll();
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

