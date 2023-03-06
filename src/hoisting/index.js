//hoisting hace referencia como js eleva la declaración de variables y funciones
console.log(nameOfDog); //aparecerá indefinido, ya que eleva la declaración pero no la asignación
var nameOfDog='lukas'; 

nameOfCat();

function nameOfCat() {
    console.log(`el mejor perrito es ${elmo}`);
}

var elmo='elmito';