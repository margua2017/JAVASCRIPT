function suma(num1, num2){
    return num1 + num2


}

console.log(suma(4,5))


function cuadrado(a){
    return a*a
}
console.log(cuadrado(5))

function myName(name){
    return "!hola" + name + "!"
}

console.log(myName("Tania"))

//saber si un numero es par o inpar

function parImpar(a){
    if (a % 2 == 0){
        return ("Es numero par")
    }else{
        return("no es numero par")
    }

}

console.log(parImpar(4))


//Tarea 1 encontrar numeros pares e impares en los numeros del 0 a 100 con un For

function pareImpar(){
    for (var i =0; i<=100; i++){
        if (i % 2 == 0){
            console.log([i]+" Es numero par")
        }else{
            console.log([i]+" No es numero par")
        }
    }
}

console.log(pareImpar())

//Cambiar el orden de un Array en FuncionesDos


















 



