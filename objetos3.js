function Car(marca, modelo, anio){
    this.marca = marca;
    this.modelo=modelo;
    this.anio=anio;

}



console.log(Car)
var miCoche = new Car('Seat','Leon',2020)
var otrocoche = new Car('Nissan', 'Platina', 1980)
var elotrocoche=new Car('Nissan', 'Platina', 1980)
console.log(miCoche)
console.log(otrocoche)
console.log(elotrocoche)

function Persona(nombre, edad, genero){
    this.nombre = nombre;
    this.edad = edad;
    this.genero=genero;
}

var maria = new Persona('Maria',20,'Mujer')
var marifer = new Persona('Maria Fernanda', 27, 'Mujer')

function auto(marca,modelo,anio,owner){
    this.marca= marca;
    this.modelo=modelo;
    this.anio = anio;
    this.owner=owner;
}
var car54 = new auto('Seat','Cupra',2016,maria)
console.log(car54)
car54.color='Azul Marino'
console.log(car54)

var car52 = new auto('WV', 'Bocho',1980,marifer)
console.log(car52)

//Tarea crear Objeto "Casa" con objeto "personas"

function Casa(color, pisos, ventanas, puertas){
    this.color=color;
    this.pisos=pisos;
    this.ventanas=ventanas;
    this.puertas=puertas;
}

var miCasa = new Casa('Azul',2,4,3)
console.log(miCasa)

function Persona(nombre, edad, genero,rol){
    this.nombre = nombre;
    this.edad = edad;
    this.genero=genero;
    this.rol=rol;
}

var mama = new Persona('Maria',20,'Mujer','mama')
var papa = new Persona('Jose',22,'Hombre','Papa')

console.log(papa)

function CasaNueva(color, pisos, ventanas, puertas,owner1,owner2){
    this.color=color;
    this.pisos=pisos;
    this.ventanas=ventanas;
    this.puertas=puertas;
    this.owner1=owner1;
    this.owner2=owner2;
}

var casa2430 = new CasaNueva('Rojo',2,2,1,papa,mama)
console.log(casa2430)