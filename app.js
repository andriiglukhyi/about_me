'use ctrict';
var question1= prompt('Hello jobseeker I are have a couple question for you! You should answer Yes or No ');
console.log('1st question', question1);

if (question1.toLowerCase() === 'yes' || question1.toLowerCase() === 'y' ) {
  alert('Thank You');
}

if (question1.toLowerCase() === 'no' || question1.toLowerCase() === 'n' || question1.toLowerCase === 'none') {
  alert ('I have to ask you any way');
}

var language= prompt('Do you think I am bilingual?');
console.log('bilingual', language);

if (language.toLowerCase() === 'yes' || language.toLowerCase() === 'y' ) {
  alert('You are tight. I do speak a couple languages');
}

if (language.toLowerCAse() === 'no' || language.toLowerCase() === 'n') {
  alert('No. I am speak a couple languages')
}

var apartment= prompt ('Do I live in apartment?');
console.log("apartment : ", apartment);

if (apartment.toUpperCase() === 'YES' || apartment.toUpperCAse() === 'Y') {
  alert('Yes. You are right about that');

if (apartment.toUpperCase() === 'NO'|| apartment.toUpperCase() === 'N') {
  alert ('Wrong answer');
}

var expir= prompt('Do you I have a job expirience');
console.log('expirience', expir);

if (expir.toLowerCase() === 'yes' || expir.toLowerCAse() === 'y') {
  alert('No. I don\'t have any expirience in IT');
}

if (expir.toLowerCase() === 'no' || expir.toLowerCAse() === 'n') {
  alert('Coret answer');
}
