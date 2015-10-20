<table class="table table-hover tableListe">
    <thead>
        <tr class="info">
            <th>Image</th>
            <th>Titre</th>
            <th>Lecteur</th>
            <th></th>
            <th></th>
        </tr>
    </thead>
    
    <?php
      session_start();
        if($_SESSION['connexion']->Grade !== NULL){
        echo '<td> <input type="button" value="ajouter a la playlist"/> </td>';
        }

    echo '</table>';