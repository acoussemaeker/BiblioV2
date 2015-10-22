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
const PARAM_AudioID= 'AudioID';
const PARAM_IdUserAudio= 'IdUserAudio';
const PARAM_Temps ='Temps';
const GET_Library = "GetLibrary";
const GET_Library_Client = "GetLibraryClient";
const UPDATE_AudioUser = "UpdateAudioUser";
const ADD_AudioUser ="AddAudioUser";
const DELETE_AudioUser ="DeleteAudioUser";
const DELETE_Audio = "DeleteAudio";
const SQL_GET_LIBRARY ="SELECT Id, Nom, Emplacement FROM audio";
const SQL_GET_LIBRARY_CLIENT ="SELECT useraudio.Id UserAudio, audio.Id, Nom, Emplacement FROM audio LEFT JOIN useraudio On audio.Id = useraudio.AudioId WHERE useraudio.UserId= '%s'";
const SQL_CREATE_AUDIOUSER ="INSERT INTO useraudio(UserId, AudioID) VALUES ('%s', '%s')";
const SQL_DELETE_AUDIOUSER ="DELETE FROM useraudio WHERE UserId='%s' AND Id='%s'";
const SQL_DELETE_AUDIO ="DELETE FROM audio WHERE ID='%s'";
const SQL_UPDATE_AUDIOUSER ="UPDATE useraudio SET Temps='%s' WHERE Id = '%s'";

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
            case ADD_AudioUser :
                return$this->AddAudioUser();
            case DELETE_AudioUser :
                return$this->DeleteAudioUser();
            case DELETE_Audio:
                return$this->DeleteAudio();
            case UPDATE_AudioUser:
                return$this->UPDATE_AudioUser();
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
        MySQL::Execute(
            sprintf(SQL_GET_LIBRARY_CLIENT,
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

    private function AddAudioUser(){
            session_start();
            MySQL::Execute(
                sprintf(SQL_CREATE_AUDIOUSER,
                $_SESSION['connexion']->Id,
                $_REQUEST[PARAM_AudioID]
            ));
            return true;
    }

    private function DeleteAudioUser(){
        session_start();
        MySQL::Execute(
            $toto =sprintf(SQL_DELETE_AUDIOUSER,
            $_SESSION['connexion']->Id,
            $_REQUEST[PARAM_AudioID]
        ));
        return true;
    }

    private function DeleteAudio(){
        MySQL::Execute(
            $toto =sprintf(SQL_DELETE_AUDIO,
                $_REQUEST[PARAM_AudioID]
            ));
        return true;
    }

    private function UPDATE_AudioUser(){
        MySQL::Execute(
            sprintf(SQL_UPDATE_AUDIOUSER,
                $_REQUEST[PARAM_Temps],
                $_REQUEST[PARAM_IdUserAudio]

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

