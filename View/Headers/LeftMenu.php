<div class="menu-gauche">

    <?php
    session_start();
    if ($_SESSION['connexion'] == null) {
        
    } else {
        switch ($_SESSION['connexion']->Grade) {
            case 0:
                echo '
                <br/>
            <ul class="nav nav-divider nav-stacked">
                <li class="btn-info"><a href="#" onclick="LoadCommonLibrary()">Bibliothèque commune</a></li>
                <li class="btn-info"><a href="#" onclick="LoadPersonalLibrary()">Bibliothèque Personel</a></li>
                <li class="btn-info"><a href="#" onclick="LoadGestionPlaylist()">Gestion des playlist</a></li>
                <li class="btn-info"><a href="#" onclick="LoadProfilView()">Gestion du profile</a></li>
                <li class="btn-info"><a href="#" onclick="LoadDoAskView()"> Faire une demande</a></li>
            </ul>
                       ';
                break;
            case 1 :
                echo '
            <br/>
            <h3>Administration</h3>
            <br/>
            <ul class = "nav nav-divider nav-stacked">
                <li class = "btn-info"><a href = "#" onclick = "">Gestion des demandes</a></li>
                <li class = "btn-info"><a href = "#" onclick = "LoadAdminUser()"> Gestion des utilisateurs</a></li>
                <li class = "btn-info"><a href = "#" onclick = "LoadAdminAudio()"> Gestion des Fichiers audio</a></li>
            </ul>';
                break;
        }
    }
    ?>
    <div id="listener">
        <audio controls="controls" preload="none" class="listener">
            <source src="audio/bouh.mp3" type="audio/mp3" />
        </audio>
    </div>
</div>