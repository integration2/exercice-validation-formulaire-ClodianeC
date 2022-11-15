/**  
 * @file Démo: Validation avec l'attribut HTML pattern
 * @author Raphaël Paré <rpare@cegep-ste-foy.qc.ca>
 * @version 0.0.1 
 */ 

const objFomulaire = {
    refChampPrenom: null,

    /**
     * Ajout l'écouteurs d'événement blur pour valider le champ prénom
     */
    initialiser: function () {
        this.refChampPrenom = document.getElementById('prenom');

        // Lorsque nous sommes dans un objet et que nous ajoutons un écouteur d'événement
        // il faut ajouter la méthode bind(this) sur la fonction de l'écouteur l'événement 
        // pour conserver le bon contexte
        // DOCUMENTATION bind: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_objects/Function/bind
        this.refChampPrenom.addEventListener('blur', this.validerPrenom.bind(this));
    },

    /**
     * Valide le champ prénom à partir de l'attribut HTML pattern appliqué sur le <input>
     * @param {FocusEvent} objEvenement 
     */
    validerPrenom: function(objEvenement) {
        // Enregistrer dans une variable l'élément HTML cible qui a déclenché 
        // la méthode validerPrenom() suite à la détection de l'événement blur
        // Dans ce contexte le currentTarget correspond à input#prenom
        const refCible = objEvenement.currentTarget;

        // Enregistrer dans une variable la valeur du motif contenu dans l'attribut HTML pattern
        const strMotif = refCible.pattern;

        // Enregistrer dans une variable l'expression régulière
        const regex = new RegExp(`^${strMotif}$`);
        // Vérifier la validité de l'expression régulière avec la méthode test()
        const blnMotifChaineValide = regex.test(refCible.value);

        if (blnMotifChaineValide === true) {
            console.log('Champ valide');
        } else {
            console.error('Champ invalide');
        }

    },
}

objFomulaire.initialiser();
