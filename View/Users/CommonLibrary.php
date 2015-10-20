<div class="nouveau">
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
    <tbody id="ListLibrary">

    <?php
      session_start();
        if($_SESSION['connexion'] == NULL){
            echo'</tr> </tbody>';
        }else if($_SESSION['connexion']->Grade == 0){
            echo '<td> <input type="button" class="btn btn-success" value="ajouter a la Biblihotheque Personnel"/> </td> </tr> ';
        }
    echo ' </tbody> </table>';
    ?>
</div>