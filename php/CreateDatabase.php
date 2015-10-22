<?php
/**
 * Created by PhpStorm.
 * User: anthony
 * Date: 22/10/2015
 * Time: 21:44
 */

/**
 * mysqli
 * test connection mysql ou dump
 * create database
 * connection database
 * msqli multi querry(file_get_content())
 */

$fichier = fopen("Database/db_credentials.php", "w");
fwrite($fichier,

    '<?php
    $DB_Host = "'.$_REQUEST["Adresse"].'";
    $DB_Port = "3306";
    $DB_Name = "'.$_REQUEST["Nom"].'";
    $DB_User = "'.$_REQUEST["Login"].'";
    $DB_Password = "'.$_REQUEST["Password"].'";');

fclose($fichier);

$con = mysqli_connect($_REQUEST["Adresse"],$_REQUEST["Login"],$_REQUEST["Password"],"mysql");

// Check connection
if (mysqli_connect_errno())
{
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}else {
    $mysqli = new mysqli($_REQUEST["Adresse"], $_REQUEST["Login"], $_REQUEST["Password"], "mysql");
    $mysqli->query('CREATE DATABASE ' . $_REQUEST["Nom"] . ';');
    $mysqli->query('USE ' . $_REQUEST["Nom"] . ';');

    $sql = "CREATE TABLE IF NOT EXISTS `audio` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Nom` varchar(20) NOT NULL,
  `Emplacement` varchar(50) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=0 ;";

    $sql.= "CREATE TABLE IF NOT EXISTS `playlist` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `Nom` varchar(20) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=0 ;";

    $sql .="CREATE TABLE IF NOT EXISTS `playlistaudio` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `PlayListId` int(11) NOT NULL,
  `UserAudioId` int(11) NOT NULL,
  `Place` int(11) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=0 ;";

    $sql .="CREATE TABLE IF NOT EXISTS `requestaudio` (
  `Id` int(20) NOT NULL AUTO_INCREMENT,
  `IdUser` int(11) NOT NULL,
  `Nom` varchar(50) DEFAULT NULL,
  `Emplacement` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=0 ;";

    $sql.="CREATE TABLE IF NOT EXISTS `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Pseudo` varchar(20) NOT NULL,
  `Password` varchar(20) NOT NULL,
  `Mail` varchar(50) NOT NULL,
  `Grade` tinyint(1) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;";

    $sql.="CREATE TABLE IF NOT EXISTS `useraudio` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `UserId` int(11) NOT NULL,
  `AudioID` int(11) NOT NULL,
  `Temps` time NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=0 ;";

    $sql .= "INSERT INTO `user` (`Id`, `Pseudo`, `Password`, `Mail`, `Grade`) VALUES
(1, 'user', 'user', 'user@gmail.fr', 0),
(2, 'admin', 'admin', 'admin@gmail.fr', 1),";



if (!$mysqli->multi_query($sql)) {
    echo "Echec lors de l'exécution de la multi-requête : (" . $mysqli->errno . ") " . $mysqli->error;
}
    return true;
}
?>












