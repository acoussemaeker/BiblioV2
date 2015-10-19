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
            $("#header").append(data); // on met dans le div le résultat de la requête ajax
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false; // on desactive le lien
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
        'Login' : $('#Login').val(),
        'Password' : $('#Password').val()
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
                UserLogged(); // on met dans le div le résultat de la requête ajax

            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false;
}

function UserLogged() {
    var URL = "View/UserHeader.php"; // on recuperer l' adresse du lien
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (url) {// si la requête est un succès
            $("#header").empty(); // on vide le div
            $("#header").append(url); // on met dans le div le résultat de la requête ajax
            LoadHeaderUser();
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false; // on desactive le lien
}

function LoadHeaderUser() {
    var URL = "php/WSController.php?ws=User&action=GetUser";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "false") {
                alert("erreur dans la connexion");
            } else {
                $("#Pseudo").empty(); // on vide le div
                $("#Pseudo").append("Vous êtes connectez en temps que " +data);
                LoadProfilView();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false;
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

function LoadDataProfil() {
    var URL = "php/WSController.php?ws=User&action=GetUser";
    $.ajax({// ajax
        url: URL, // url de la page à charger
        cache: false, // pas de mise en cache
        dataType: 'text',
        type: 'POST',
        success: function (data) {// si la requête est un succès
            if (data == "false") {
                alert("erreur dans la connexion");
            } else {
                $("#PseudoHeader").empty(); // on vide le div
                $("#PseudoHeader").append("Vous êtes connectez en temps que " +data.pseudo);
                LoadProfilView();
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrows) { // erreur durant la requete
        }
    });
    return false;
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