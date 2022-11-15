/**  
 * @file Démo: element.querySelectorAll
 * @author Raphaël Paré <rpare@cegep-ste-foy.qc.ca>
 * @version 0.0.1 
 */ 


const refListeLi = document.querySelectorAll('li');

const refPremierLi = refListeLi[0];
console.log('Premier élément <li> = ', refPremierLi);

const refDeuxiemeLi = refListeLi[1];
console.log('Deuxième élément <li> = ', refDeuxiemeLi);

const refDernierLi = refListeLi[refListeLi.length - 1];
console.log('Dernier élément <li> = ', refDernierLi);

const inNombreLi = refListeLi.length;
console.log('Nombre d\'élément <li> = ', inNombreLi);
