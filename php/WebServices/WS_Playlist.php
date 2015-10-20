<?php
/**
 * Created by PhpStorm.
 * User: anthony
 * Date: 20/10/2015
 * Time: 08:37
 */
require 'IWebServiciable.php';
include '/Database/db_connect.php';

const PARAM_ACTION = 'action';
const PARAM_Titre = 'Titre';
const ADD_Playlist ="AddPlaylist";
const SQL_CREATE_Playlist ="INSERT INTO playlist(UserId, Nom) VALUES ('%s', '%s')";

class WS_Playlist implements IWebServiciable {

    public function doGet() {
        return $this->DoPost();
    }

    public function doPost() {

        if (!isset($_REQUEST[PARAM_ACTION]))
            Helper::ThrowAccessDenied();

        switch ($_REQUEST[PARAM_ACTION])
        {
            case ADD_Playlist :
                return $this->AddPlaylist();
            default:
                Helper::ThrowAccessDenied();
                break;
        }
    }

    private function AddPlaylist(){
        session_start();
        MySQL::Execute(
            sprintf(SQL_CREATE_Playlist,
                $_SESSION['connexion']->Id,
                $_REQUEST[PARAM_Titre]
            ));
        return true;
    }

    public function doPut() {
        Helper::ThrowAccessDenied();
    }

    public function doDelete() {
        Helper::ThrowAccessDenied();
    }
}