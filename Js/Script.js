/**
 * Created by anthony on 13/10/2015.
 */
function Start() {
    var URL = "View/ConnexionHeader.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            $("#header").empty(); // on vide le div
            $("#contain").empty();
            $("#LeftMenu").empty();
            $("#header").append(data); // on met dans le div le résultat de la requête ajax
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false; // on desactive le lien
}

function Disconnect() {
    var URL = "php/WSController.php?ws=User&action=Disconnect";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if(data == "false")
            {
                alert("erreur dans la connexion");
            }else{
                Start(); // on met dans le div le résultat de la requête ajax

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false;
}

function Verif(){
    if($('#Login').val() == ""){
        alert("veuillez remplir le Login");
    }else{
        if($('#Password').val()==""){
            alert("veuillez remplir le Password");
        }else{
            UserLog();
        }
    }
}

function UserLog() {
    var URL = "php/WSController.php?ws=User&action=Connect";
    var params = {
        'Login' : $('#LoginHeader').val(),
        'Password' : $('#PasswordHeader').val()
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if(data == "false")
            {
                alert("erreur dans la connexion");
            }else{
                HeaderUserLog(); // on met dans le div le résultat de la requête ajax

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false;
}

function HeaderUserLog() {
    var URL = "View/UserHeader.php"; // on recuperer l' adresse du lien
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
    return false; // on desactive le lien
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
            console.log(dataa);
            if (data == "false") {
                alert("erreur dans la connexion");
            } else {
                $("#PseudoHeader").empty();
                $("#PseudoHeader").append("Vous êtes connectez en temps que : " +dataa.Pseudo);
                LoadLeftMenuView();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false;
}

function LoadLeftMenuView(){
    var URL = "View/MenuGauche.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (url) {// si la requête est un succès
            $("#LeftMenu").empty(); // on vide le div
            $("#LeftMenu").append(url); // on met dans le div le résultat de la requête ajax
            LoadProfilView();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false; // on desactive le lien
}

function LoadProfilView(){
    var URL = "View/ProfilUser.php"; // on recuperer l' adresse du lien
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
    return false; // on desactive le lien
}

function LoadDataProfil(){
    var URL = "php/WSController.php?ws=User&action=GetUser";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            console.log(dataa);
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
    return false;
}

function LoadModifProfilUser(){
    var URL = "View/ModifProfilUser.php"; // on recuperer l' adresse du lien
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
    return false; // on desactive le lien
}

function LoadModifProfilDataUSer(){
    var URL = "php/WSController.php?ws=User&action=GetUser";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            var dataa = JSON.parse(data);
            console.log(dataa);
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
    return false;
}

function ModifProfilUserData(){
    var URL = "php/WSController.php?ws=User&action=ModifUser";
    var params = {
        'Login' : $('#Login').val(),
        'Password' : $('#Password').val(),
        'RePassword' : $('#RePassword').val(),
        'Mail' : $('#Mail').val(),
        'ReMail' : $('#ReMail').val()
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data : params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "false") {
                alert("erreur dans la connexion");
            } else {
                alert("Modification Validée");
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false;
}

function LoadCreateProfilView(){
    var URL = "View/NewUser.php"; // on recuperer l' adresse du lien
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
    return false; // on desactive le lien
}

function AddUser(){
    var URL = "php/WSController.php?ws=User&action=CreateUser";
    var params = {
        'Login' : $('#Login').val(),
        'Password' : $('#Password').val(),
        'RePassword' : $('#RePassword').val(),
        'Mail' : $('#Mail').val(),
        'ReMail' : $('#ReMail').val()
    };
    $.ajax({// ajax
        url: URL, // url de la page à charger
        data: params,
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if(data == "true"){
                alert ("Utilisateur enregister")
            }
            else{
                alert("Erreur dans l'enregistrement")
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false;
}

function LoadGestionPlaylist(){
    var URL = "View/GestionPlaylist.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (url) {// si la requête est un succès
            $("#contain").empty(); // on vide le div
            $("#contain").append(url); // on met dans le div le résultat de la requête ajax
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false; // on desactive le lien
}