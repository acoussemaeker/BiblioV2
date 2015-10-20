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
        if ($_SESSION['connexion']->Grade !== NULL) {
            echo '<div class="btn-group" role="group" ><td> <input type="button" class="btn btn-danger" value="Supprimer de la Bibliotheque personnel"/> </td> </tr> </tbody>';
            echo '<td> <input type="button" class="btn btn-success" value="Ajouter à une playlistl"/> </td></div>';
        }

        echo '</table>';
        ?>
</div>