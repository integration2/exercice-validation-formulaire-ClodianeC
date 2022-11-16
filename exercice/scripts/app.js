const objFormulaire = {
    initialiser: function () {
        document.getElementById('prenom').addEventListener('blur', this.validerChampTexte.bind(this));
        document.getElementById('nom').addEventListener('blur', this.validerChampTexte.bind(this));
        document.getElementById('courriel').addEventListener('blur', this.validerChampTexte.bind(this));
        document.getElementById('motDePasse').addEventListener('blur', this.validerChampTexte.bind(this));

        document.getElementById('motDePasse').addEventListener('keyup', this.checkPasssword.bind(this));

        document.getElementById('confirmMotDePasse').addEventListener('blur', this.validerPassword.bind(this));
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
            refMessageErreur.innerHTML = `${objJSONMessagesErreur[strIdCible].vide}`;
        } else if(blnMotifChaineValide === false && objCible.pattern.length > 0) {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${objJSONMessagesErreur[strIdCible].motif}`;
        } else {
            refCtnValidation.classList.remove('erreur');
            refMessageErreur.innerHTML = '';
        }
    },
    validerPassword: function (objEvenement) {
        const strChainePassword = document.getElementById('motDePasse').value;
        console.log(strChainePassword);


        const objCible = objEvenement.currentTarget;
        const strChaine = objCible.value;
        const strIdCible = objCible.id;
        const refCtnValidation = objCible.closest('.ctnValidation');
        const refMessageErreur = refCtnValidation.querySelector('.erreur');

        console.log(strChaine);
        if (strChaine === '') {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${objJSONMessagesErreur[strIdCible].vide}`;
        } else if(strChainePassword!=strChaine && strChaine.length > 0) {
            console.log("allo");
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${objJSONMessagesErreur[strIdCible].pareil}`;
        } else {
            refCtnValidation.classList.remove('erreur');
            refMessageErreur.innerHTML = '';
        }
    },
    checkPasssword: function (objEvenement) {
        const objCible = document.getElementById("motDePasse");
        const strChaine = objCible.value;
        // const strIdCible = objCible.id;
        const objMinuscule = document.getElementById("min");
        const objMajuscule = document.getElementById("maj");
        const objNombre = document.getElementById("no");
        const objHuit = document.getElementById("huit");
        const objSpecial = document.getElementById("special");
        const objMax = document.getElementById("max");

        const lettreMin = /[a-z]/g;
        if(strChaine.match(lettreMin)) {
            objMinuscule.classList.remove("erreur");
            objMinuscule.classList.add("bien");
        } else {
            objMinuscule.classList.remove("bien");
            objMinuscule.classList.add("erreur");
        }
        const lettreMaj = /[A-Z]/g;
        if(strChaine.match(lettreMaj)) {
            objMajuscule.classList.remove("erreur");
            objMajuscule.classList.add("bien");
        } else {
            objMajuscule.classList.remove("bien");
            objMajuscule.classList.add("erreur");
        }
        const nombre = /[0-9]/g;
        if(strChaine.match(nombre)) {
            objNombre.classList.remove("erreur");
            objNombre.classList.add("bien");
        } else {
            objNombre.classList.remove("bien");
            objNombre.classList.add("erreur");
        }
        const special = /[?=.*\[@$!%*?&#\]]/g;
        if(strChaine.match(special)) {
            objSpecial.classList.remove("erreur");
            objSpecial.classList.add("bien");
        } else {
            objSpecial.classList.remove("bien");
            objSpecial.classList.add("erreur");
        }
        if(strChaine.length>=8) {
            objHuit.classList.remove("erreur");
            objHuit.classList.add("bien");
        } else {
            objHuit.classList.remove("bien");
            objHuit.classList.add("erreur");
        }
        if(strChaine.length<=256) {
            objMax.classList.remove("erreur");
            objMax.classList.add("bien");
        } else {
            objMax.classList.remove("bien");
            objMax.classList.add("erreur");
        }
    }
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