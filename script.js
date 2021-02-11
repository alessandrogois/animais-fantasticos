//Seleção de Elelmentos DOM

//const amnimais = document.getElementById('animais');

//console.log(amnimais)

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection);

const animais = document.querySelectorAll('.grid-section');
console.log(animais);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const linkInterno = document.querySelector('[href^="#"');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

console.log('HTML Collection X NodeList')

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHTML);
console.log(gridSectionNode);