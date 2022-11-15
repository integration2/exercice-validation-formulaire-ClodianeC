/**  
 * @file Démo: element.closest()
 * @author Raphaël Paré <rpare@cegep-ste-foy.qc.ca>
 * @version 0.0.1 
 */ 


const refPremierLi = document.querySelector('li');

const refPremierParentLiAvecClasseNavigation = refPremierLi.closest('.navigation');
console.log('Premier parent du <li> avec la classe .navigation = ', refPremierParentLiAvecClasseNavigation);

const refPremierParentLiAvecElementMain = refPremierLi.closest('main');
console.log('Premier parent du <li> avec l\'élément <main> = ', refPremierParentLiAvecElementMain);

