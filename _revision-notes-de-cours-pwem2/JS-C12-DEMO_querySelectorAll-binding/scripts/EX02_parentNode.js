/**  
 * @file Démo: element.parentNode
 * @author Raphaël Paré <rpare@cegep-ste-foy.qc.ca>
 * @version 0.0.1 
 */ 


const refPremierLi = document.querySelector('li');

const refParentPremierLi = refPremierLi.parentNode;
console.log('Élément HTML parent du premier <li> = ', refParentPremierLi);

const refParentListeLiens = document.querySelector('.liste-liens').parentNode;
console.log('Élément HTML parent de ul.liste-liens = ', refParentListeLiens);

const refParentNav = refParentListeLiens.parentNode;
console.log('Élément HTML parent de nav = ', refParentNav);



