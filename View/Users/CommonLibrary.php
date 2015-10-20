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
    <tbody>
        <tr>
            <td>image</td>   
            <td>LA FIRST MUSIQUE</td>
            <td><audio controls="controls"></audio></td>
    <?php
      session_start();
        if($_SESSION['connexion'] == NULL){
            echo'</tr> </tbody>';
        }else if($_SESSION['connexion']->Grade == 0){
            echo '<td> <input type="button" class="btn btn-success" value="ajouter a la Biblihotheque Personnel"/> </td> </tr> </tbody>';
        }
    echo '</table>';
    ?>
</div>