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
const SQL_GET_LIBRARY ="SELECT Id, Nom, Emplacement FROM audio";

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
            default:
                Helper::ThrowAccessDenied();
        }
    }

    function GetLibrary(){
        MySQL::Execute(SQL_GET_LIBRARY);
        return MySQL::GetResult()->fetchAll();

    }

    public function doPut() {
        Helper::ThrowAccessDenied();
    }

    public function doDelete() {
        Helper::ThrowAccessDenied();
    }
}

