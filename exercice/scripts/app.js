const objFormulaire = {
    initialiser: function () {
        document.getElementById('prenom').addEventListener('blur', this.validerChampTexte.bind(this));
        document.getElementById('nom').addEventListener('blur', this.validerChampTexte.bind(this));

    },
    validerChampTexte: function (objEvenement) {
        const objCible = objEvenement.currentTarget;
        const strChaine = objCible.value;
        const strIdCible = objCible.id;
        const refCtnValidation = objCible.closest('.ctnValidation');
        const refMessageErreur = refCtnValidation.querySelector('.erreur');

        const motif = new RegExp(`^${objCible.pattern}$`);
        const blnMotifChaineValide = motif.test(strChaine);

        if (strChaine === '') {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${strIconeErreur} ${objJSONMessagesErreur[strIdCible].vide}`;
        } else if(blnMotifChaineValide === false && objCible.pattern.length > 0) {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${strIconeErreur} ${objJSONMessagesErreur[strIdCible].motif}`;
        } else {
            refCtnValidation.classList.remove('erreur');
            refMessageErreur.innerHTML = '';
        }
    },
}

function hideShow() {
    var input = document.getElementById("motDePasse");
    if (input.type == "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}
function hideShowConfirm() {
    var input2 = document.getElementById("confirmMotDePasse");
    if (input2.type == "password") {
        input2.type = "text";
    } else {
        input2.type = "password";
    }
}
document.getElementById("showPass").addEventListener("click", function(){
    hideShow();
});
document.getElementById("showPassConfirm").addEventListener("click", function(){
    hideShowConfirm();
});

window.addEventListener('load', function(){
    objFormulaire.initialiser();
});