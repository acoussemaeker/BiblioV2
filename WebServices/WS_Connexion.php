<?php
/**
 * Created by PhpStorm.
 * User: anthony
 * Date: 13/10/2015
 * Time: 21:20
 */

require '/IWebServiciable.php';
include '../BddAccess.php';

class WS_Connexion implements IWebServiciable {

    public $requestParams;

    function __construct($requestParams) {
        $this->requestParams = $requestParams;
    }

    public function doDelete() {

    }

    public function doGet() {
        return $this->doPOST();
    }

    public function doPOST() {
        try {
            $cnx = BddAccess::getInstance();

            $SQL = "SELECT id, Pseudo, Password, Grade FROM user WHERE Pseudo='".$this->requestParams['Login']."'";
            $rs = $cnx->query($SQL);
            $info = $rs->fetch_object();

                if($info->Password == $this->requestParams['Password']){
                    return $info;
                }else {
                    return false;
                }
        }
        catch(Exception $e){
            return false;
        }
    }

    public function doPut() {

    }

    public function doRequest() {

    }

    public function setParameters() {

    }

    public function doNeedAuth() {
        return false;
    }
}

