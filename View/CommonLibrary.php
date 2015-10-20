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
        </tr>
        
    </tbody>
    <?php
      session_start();
        if($_SESSION['connexion']->Grade !== NULL){
        echo '<td> <input type="button" class="btn btn-success" value="ajouter a la Biblihotheque Personnel"/> </td>';
        }

    echo '</table>';
    ?>
</div>