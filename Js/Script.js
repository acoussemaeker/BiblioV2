/**
 * Created by anthony on 13/10/2015.
 */
function Start() {
    var URL = "View/Headers/ConnexionHeader.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            $("#header").empty(); // on vide le div
            $("#header").append(data); // on met dans le div le résultat de la requête ajax
            LoadLeftMenuView();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function Disconnect() {
    var URL = "php/WSController.php?ws=User&action=Disconnect";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "false")
            {
                alert("erreur dans la connexion");
            } else {
                Start(); // on met dans le div le résultat de la requête ajax

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function Check() {
    var URL = "php/WSController.php?ws=User&action=Check";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "false")
            {
                LaodDataCommonLibraryDisconnect();
            } else {
                LaodDataCommonLibraryConnect();

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function Verif() {
    if ($('#Login').val() == "") {
        alert("veuillez remplir le Login");
    } else {
        if ($('#Password').val() == "") {
            alert("veuillez remplir le Password");
        } else {
            UserLog();
        }
    }
}

function UserLog() {
    var URL = "php/WSController.php?ws=User&action=Connect";
    var params = {
        'Login': $('#LoginHeader').val(),
        'Password': $('#PasswordHeader').val()
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "false")
            {
                alert("erreur dans la connexion");
            } else {
                HeaderUserLog(); // on met dans le div le résultat de la requête ajax

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function HeaderUserLog() {
    var URL = "View/Headers/UserHeader.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (url) {// si la requête est un succès
            $("#header").empty(); // on vide le div
            $("#header").append(url); // on met dans le div le résultat de la requête ajax
            LoadDataHeader();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadDataHeader() {
    var URL = "php/WSController.php?ws=User&action=GetUser";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            //console.log(dataa);
            if (data == "false") {
                alert("erreur dans la connexion");
            } else {
                $("#PseudoHeader").empty();
                $("#PseudoHeader").append("Vous êtes connectez en temps que : " + dataa.Pseudo);
                LoadLeftMenuView();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadLeftMenuView() {
    var URL = "View/Headers/LeftMenu.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (url) {// si la requête est un succès
            $("#LeftMenu").empty(); // on vide le div
            $("#LeftMenu").append(url); // on met dans le div le résultat de la requête ajax
            LoadCommonLibrary();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadProfilView() {
    var URL = "View/Users/ProfilUser.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (url) {// si la requête est un succès
            $("#contain").empty(); // on vide le div
            $("#contain").append(url); // on met dans le div le résultat de la requête ajax
            LoadDataProfil();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadDataProfil() {
    var URL = "php/WSController.php?ws=User&action=GetUser";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            //console.log(dataa);
            if (data == "false") {
                alert("erreur dans la connexion");
            } else {
                $("#Pseudo").empty();
                $("#Pseudo").val(dataa.Pseudo);
                $("#Password").empty();
                $("#Password").val(dataa.Password);
                $("#Email").empty();
                $("#Email").val(dataa.Mail);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadModifProfilUser() {
    var URL = "View/Users/ModifProfilUser.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (url) {// si la requête est un succès
            $("#contain").empty(); // on vide le div
            $("#contain").append(url); // on met dans le div le résultat de la requête ajax
            LoadModifProfilDataUSer();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadModifProfilDataUSer() {
    var URL = "php/WSController.php?ws=User&action=GetUser";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            //console.log(dataa);
            if (data == "false") {
                alert("erreur dans la connexion");
            } else {
                $("#Login").empty();
                $("#Login").val(dataa.Pseudo);
                $("#Password").empty();
                $("#Password").val(dataa.Password);
                $("#RePassword").empty();
                $("#RePassword").val(dataa.Password);
                $("#Mail").empty();
                $("#Mail").val(dataa.Mail);
                $("#ReMail").empty();
                $("#ReMail").val(dataa.Mail);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function ModifProfilUserData() {
    var URL = "php/WSController.php?ws=User&action=ModifUser";
    var params = {
        'Login': $('#Login').val(),
        'Password': $('#Password').val(),
        'RePassword': $('#RePassword').val(),
        'Mail': $('#Mail').val(),
        'ReMail': $('#ReMail').val()
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "false") {
                alert("Erreur dans la Modification");
            } else {
                alert("Profil Modifier, Veuillez vous reconnecter");
                Disconnect();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadCreateProfilView() {
    var URL = "View/Users/NewUser.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (url) {// si la requête est un succès
            $("#contain").empty(); // on vide le div
            $("#contain").append(url); // on met dans le div le résultat de la requête ajax
            LoadDataProfil();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function AddUser() {
    var URL = "php/WSController.php?ws=User&action=CreateUser";
    var params = {
        'Login': $('#Login').val(),
        'Password': $('#Password').val(),
        'RePassword': $('#RePassword').val(),
        'Mail': $('#Mail').val(),
        'ReMail': $('#ReMail').val()
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "true") {
                alert("Utilisateur enregister")
            }
            else {
                alert("Erreur dans l'enregistrement")
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadGestionPlaylist() {
    var URL = "View/Users/GestionPlaylist.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (url) {// si la requête est un succès
            $("#contain").empty(); // on vide le div
            $("#contain").append(url); // on met dans le div le résultat de la requête ajax
            LoadDataPlaylist();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadDataPlaylist() {
    var URL = "php/WSController.php?ws=Playlist&action=GetPlaylist";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            //console.log(dataa);
            if (data == "false") {
                alert("Aucune Playlist Trouvé");
            } else {
                for (var t in dataa) {
                    $('#TabPlaylist').append("<tr> <td>" + dataa[t].Nom + "</td><td><audio controls=\"controls\"></audio></td><td><div class=\"btn-group\" role=\"group\" ><button type=\"button\" class=\"btn btn-default\" onclick=\"LoadDetailPlaylist()\">Afficher</button> <button type=\"button\" class=\"btn btn-danger\" onclick=\"DeletePlaylist(" + dataa[t].Id + ")\">Supprimer</button> </div> </td> </tr>");
                }
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadDetailPlaylist(Id) {
    var URL = "View/Users/ModifPlaylist.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            $("#contain").empty();
            $("#contain").append(data); // on met dans le div le résultat de la requête ajax
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function DeletePlaylist(data) {
    var URL = "php/WSController.php?ws=Playlist&action=DeletePlaylist";
    var params = {
        'PlaylistID': data
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "true") {
                alert("Playlist Supprimer de votre Bibliotheque")
                LoadGestionPlaylist();
            }
            else {
                alert("Erreur dans l'enregistrement")
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadCommonLibrary() {
    var URL = "View/Users/CommonLibrary.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            $("#contain").empty();
            $("#contain").append(data); // on met dans le div le résultat de la requête ajax
            Check();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LaodDataCommonLibraryDisconnect() {
    var URL = "php/WSController.php?ws=Library&action=GetLibrary";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            $('#listLibrary').empty();
            for (var t in dataa) {
                $('#ListLibrary').append("<tr><td>" + dataa[t].Emplacement + "</td><td>" + dataa[t].Nom + "</td><td><button onclick=\"startListener('" + dataa[t].Emplacement + "')\" type=\"button\"><span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span></button></td></tr> ");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LaodDataCommonLibraryConnect() {
    var URL = "php/WSController.php?ws=Library&action=GetLibrary";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            $('#listLibrary').empty();
            for (var t in dataa) {
                $('#ListLibrary').append("<tr><td>" + dataa[t].Emplacement + "</td><td>" + dataa[t].Nom + "</td><td><button onclick=\"startListener('" + dataa[t].Emplacement + "', '" + dataa[t].Nom + "')\" type=\"button\"><span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span></button></td> <td> <input type=\"button\" class=\"btn btn-success\" value=\"ajouter a la Biblihotheque Personnel\" onclick=\"AddAudioUser(" + dataa[t].Id + ")\"/> </td> </tr>");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function AddAudioUser(data) {
    var URL = "php/WSController.php?ws=Library&action=AddAudioUser";
    var params = {
        'AudioID': data
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "true") {
                alert("Audio ajouter");
            }
            else {
                alert("Erreur dans l'enregistrement");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function AddAudioUser(data) {
    var URL = "php/WSController.php?ws=Library&action=AddAudioUser";
    var params = {
        'AudioID': data
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "true") {
                alert("Audio ajouter");
            }
            else {
                alert("Erreur dans l'enregistrement");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function DeleteAudioUser(data) {
    var URL = "php/WSController.php?ws=Library&action=DeleteAudioUser";
    var params = {
        'AudioID': data
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "true") {
                alert("Audio Supprimer de votre Bibliotheque");
                LoadPersonalLibrary();
            }
            else {
                alert("Erreur dans l'enregistrement");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadPersonalLibrary() {
    var URL = "View/Users/PersonalLibrary.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            $("#contain").empty();
            $("#contain").append(data); // on met dans le div le résultat de la requête ajax
            LaodDataPersonalLibrary();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LaodDataPersonalLibrary() {
    var URL = "php/WSController.php?ws=Library&action=GetLibraryClient";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            $('#listLibrary').empty();
            
            for (var t in dataa) {
//                alert(dataa[t].UserAudio);
                $('#ListLibrary').append("<tr><td>" + dataa[t].Emplacement + "</td><td>" + dataa[t].Nom + "</td><td><button onclick=\"startListener('" + dataa[t].Emplacement + "', '" + dataa[t].Nom + "', '" + dataa[t].UserAudio + "')\" type=\"button\"><span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span></button></td> <td><div class=\"btn-group\" role=\"group\" ><input type=\"button\" class=\"btn btn-danger\" value=\"Supprimer de la Bibliotheque personnel\" onclick=\"DeleteAudioUser(" + dataa[t].UserAudio + ")\"/> </div> </td> </tr>");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadNewPlaylist() {
    var URL = "View/Users/NewPlaylist.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            $("#contain").empty();
            $("#contain").append(data); // on met dans le div le résultat de la requête ajax
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function CreateNewPlaylist() {
    var URL = "php/WSController.php?ws=Playlist&action=AddPlaylist";
    var params = {
        'Titre': $('#Titre').val()
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "true") {
                alert("Playlist Créée");
                LoadGestionPlaylist();
            }
            else {
                alert("Erreur dans l'enregistrement");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadDoAskView() {
    var URL = "View/Users/DoAsk.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            $("#contain").empty();
            $("#contain").append(data); // on met dans le div le résultat de la requête ajax
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

var Counter;
function startListener(data, nom, id) {
    var newaudio = "<div><input type='hidden' id='id' value='" + id + "' /><h3>" + nom + "</h3><audio id=\"audio\" class=\"listener\" controls=\"controls\" buffered preload=\"none\"> <source src=\"audio/" + data + "\" type=\"audio/mp3\" />Votre navigateur n'est pas compatible </audio></div>";
    $("#listener").empty();
    $("#listener").append(newaudio);
    var audio = document.getElementById("audio");
    audio.play();
    Counter = setInterval(CountTime, 10000);
}
//test tiens antho modifie

function StopTime(audio) {
    clearInterval(Counter);
}


function CountTime() {
    var id = document.getElementById("id").value;
    var audio = document.getElementById("audio");
    if (audio.ended) {
        StopTime(audio);
    }
    InsertTempsUserAudio(id, audio.currentTime);
    //var time = "<label class='affichage'>" + audio.currentTime + "</label></br>";
    //$("#Container").append(time);
}

function InsertTempsUserAudio(IdUserAudio, Temps){
    var URL = "php/WSController.php?ws=Library&action=UpdateAudioUser";
    var params = {
        'IdUserAudio': IdUserAudio,
        'Temps': Temps
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data : params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadAdminAudio() {
    var URL = "php/WSController.php?ws=Library&action=GetLibrary";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            $('#ListLibrary').empty();
            for (var t in dataa) {
                $('#ListLibrary').append("<tr><td>" + dataa[t].Emplacement + "</td><td>" + dataa[t].Nom + "</td><td><button onclick=\"startListener('" + dataa[t].Emplacement + "')\" type=\"button\"><span class=\"glyphicon glyphicon-play\" aria-hidden=\"true\"></span></button></td> <td> <input type=\"button\" class=\"btn btn-success\" value=\"Suprimmer de la Bibliotheque Commune\" onclick=\"DeleteAudio(" + dataa[t].Id + ")\"/> </td> </tr>");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function DeleteAudio(data) {
    var URL = "php/WSController.php?ws=Library&action=DeleteAudio";
    var params = {
        'AudioID': data
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "true") {
                alert("Audio Supprimer de la Bibliotheque");
            }
            else {
                alert("Erreur dans l'enregistrement");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadAdminUser() {
    var URL = "View/Admin/GestionUser.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            $("#contain").empty();
            $("#contain").append(data); // on met dans le div le résultat de la requête ajax
            LoadDataAdminUser();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function LoadDataAdminUser() {
    var URL = "php/WSController.php?ws=User&action=GetAll"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            $('#ListUsers').empty();
            for (var t in dataa) {
                $('#ListUsers').append("<tr><td>" + dataa[t].Pseudo + "</td><td>" + dataa[t].Mail + "</td><td>" + dataa[t].Grade + "</td><td><input type=\"button\" class=\"btn btn-danger\" value=\"degage salle truit\" onclick=\"DeleteUser(" + dataa[t].Id + ")\"/></td></tr>");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function DeleteUser(data) {
    var URL = "php/WSController.php?ws=user&action=DeleteUser";
    var params = {
        'AudioID': data
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "true") {
                alert("User Supprimer");
                LoadAdminUser();
            }
            else {
                alert("Erreur dans la suppression");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

function createdatabase(){

    var URL = "php/CreateDatabase.php"; // on recuperer l' adresse du lien
    var params = {
        'Nom': document.getElementById("nom").value,
        'Password': document.getElementById("password").value,
        'Adresse': document.getElementById("adresse").value,
        'Login': document.getElementById("login").value
        };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data : params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if(data == ""){
                alert('Database créer, rechargez la page pour arriver sur le site');
                Start();
            }else{
                alert("erreur");
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
}

