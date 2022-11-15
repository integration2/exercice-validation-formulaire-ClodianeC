/* Corrigé de validation du formulaire Concours Voyage de rêve */
/* @authors : Pascal Larose, Raphaël Paré, Ève Février, Cynthia Thibault-Larouche */
/* @todo (Amélioration): Ajouter sur l'élément de formulaire en erreur 
            l'attribut aria-describedby = l'identifiant du paragraphe d'erreur qui suit et 
            l'attribut aria-invalid = true */


const strIconeErreur = `<span>
    <span class="screen-reader-only">Erreur</span>
    <span class="icone icone--erreur"></span>
</span>`;

const objFormulaire = {
    initialiser: function () {
        document.getElementById('prenom').addEventListener('blur', this.validerChampTexte.bind(this));
        document.getElementById('nom').addEventListener('blur', this.validerChampTexte.bind(this));
        
        document.getElementById('adresse').addEventListener('blur', this.validerChampTexte.bind(this));
        document.getElementById('ville').addEventListener('blur', this.validerChampTexte.bind(this))
        document.getElementById('pays').addEventListener('blur', this.validerListeDeroulante.bind(this));
        document.getElementById('pays').addEventListener('change', this.validerListeDeroulante.bind(this));
        document.getElementById('codepostal').addEventListener('blur', this.validerChampTexte.bind(this));
        document.getElementById('courriel').addEventListener('blur', this.validerChampTexte.bind(this));
        
        document.getElementById('indicatif').addEventListener('blur', this.validerChampTexte.bind(this));
        document.getElementById('numero').addEventListener('blur', this.validerChampTexte.bind(this));

        document.getElementById('jour').addEventListener('blur', this.validerJour.bind(this));
        document.getElementById('mois').addEventListener('blur', this.validerListeDeroulante.bind(this));
        document.getElementById('mois').addEventListener('change', this.validerListeDeroulante.bind(this));
        document.getElementById('annee').addEventListener('blur', this.validerAnnee.bind(this));
        
        const refRadiosQuestion = document.querySelectorAll('[name=question]');
        for(let intCpt = 0; intCpt < refRadiosQuestion.length; intCpt++){
            refRadiosQuestion[intCpt].addEventListener('blur', this.validerReponseParticipant.bind(this));
            refRadiosQuestion[intCpt].addEventListener('change', this.validerReponseParticipant.bind(this));
        }
        // MISE EN COMMENTAIRE DE LA VERSION ALTERNATIVE AVEC FONCTION FLÉCHÉE et boucle forEach
        // const refRadiosQuestion = document.querySelectorAll('[name=question]');
        // refRadiosQuestion.forEach((radio) => {
        //     radio.addEventListener('blur', this.validerReponseParticipant.bind(this));
        //     radio.addEventListener('change', this.validerReponseParticipant.bind(this));
        // });

        document.getElementById('reglement').addEventListener('blur', this.validerAcceptationReglement.bind(this));
        document.getElementById('reglement').addEventListener('change', this.validerAcceptationReglement.bind(this));
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

    validerListeDeroulante: function (objEvenement) {
        const objCible = objEvenement.currentTarget;
        const strIdCible = objCible.id;
        const refCtnValidation = objCible.closest('.ctnValidation');
        const refMessageErreur = refCtnValidation.querySelector('.erreur');
        
        if (objCible.value === '') {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${strIconeErreur} ${objJSONMessagesErreur[strIdCible].vide}`;
        } else {
            refCtnValidation.classList.remove('erreur');
            refMessageErreur.innerHTML = '';
        }
    },

    validerJour: function (objEvenement) {
        const objCible = objEvenement.currentTarget;
        const strIdCible = objCible.id;
        const strChaine = objCible.value;
        const refCtnValidation = objCible.closest('.ctnValidation');
        const refMessageErreur = refCtnValidation.querySelector('.erreur');

        if (strChaine === '') {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${strIconeErreur} ${objJSONMessagesErreur[strIdCible].vide}`;
        } else if (parseInt(strChaine) < 1 || parseInt(strChaine) > 31) {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${strIconeErreur} ${objJSONMessagesErreur[strIdCible].motif}`;
        } else {
            refCtnValidation.classList.remove('erreur');
            refMessageErreur.innerHTML = '';
        }
    },

    validerAnnee: function (objEvenement) {
        const objCible = objEvenement.currentTarget;
        const strIdCible = objCible.id;
        const strChaine = objCible.value;
        const refCtnValidation = objCible.closest('.ctnValidation');
        const refMessageErreur = refCtnValidation.querySelector('.erreur');

        if (strChaine === '') {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${strIconeErreur} ${objJSONMessagesErreur[strIdCible].vide}`;
        } else if (parseInt(strChaine) > 2022) {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${strIconeErreur} ${objJSONMessagesErreur[strIdCible].motif}`;
        } else {
            refCtnValidation.classList.remove('erreur');
            refMessageErreur.innerHTML = '';
        }
    },

    validerReponseParticipant: function (objEvenement) {
        const objCible = objEvenement.currentTarget;
        const refCtnValidation = objCible.closest('.ctnValidation');
        const refMessageErreur = refCtnValidation.querySelector('.erreur');
        
        if (document.querySelector('[name=question]:checked') == null) {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${strIconeErreur} ${objJSONMessagesErreur['reponseParticipant'].vide}`;
        } else {
            refCtnValidation.classList.remove('erreur');
            refMessageErreur.innerHTML = '';
        }
    },

    validerAcceptationReglement: function (objEvenement) {
        const objCible = objEvenement.currentTarget;
        const strIdCible = objCible.id;
        const refCtnValidation = objCible.closest('.ctnValidation');
        const refMessageErreur = refCtnValidation.querySelector('.erreur');

        if (objCible.checked === false) {
            refCtnValidation.classList.add('erreur');
            refMessageErreur.innerHTML = `${strIconeErreur} ${objJSONMessagesErreur[strIdCible].vide}`;
        } else {
            refCtnValidation.classList.remove('erreur');
            refMessageErreur.innerHTML = '';
        }
    }
};

window.addEventListener('load', function(){
    objFormulaire.initialiser();
});