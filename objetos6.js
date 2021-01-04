const Manager = {
    name: 'Guillermo',
    company: 'Telefonica',
    edad:32,
    job:'Software Engineer'
}

const Interno = {
    name: 'Paco',
    edad: 21,
    job: 'Ir por los cafes'
}

function sayHi(){
    console.log('hola, mi nombre es ', this.name)

}
function miEdad(){
    console.log('Tengo', this.edad , 'anos')
}

Manager.sayHi = sayHi;
Manager.miEdad = miEdad;
Interno.sayHi=sayHi;

Manager.sayHi()
Manager.miEdad()
Interno.sayHi()

console.log(Manager.salario)