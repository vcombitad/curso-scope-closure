//variables

var a;//declaración
var b= 'b'; //declaramos y asignamos
b='bb'; //reasignación
var a= 'aa'; //redeclaración

//global scope
var fruta ='apple';

function mejorFruta() {
console.log(fruta)
}
mejorFruta()

// otra forma de hacer una variable global, aunque no se debe usar porque se deriva de un error de sintaxis: es asignar sin declarar una variable en una función

function countries () {
    country='Colombia';
    console.log(country);
}
countries();
console.log(country);