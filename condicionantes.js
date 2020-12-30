var texto
texto = "servidor ON"

if (texto == 'Servidor off'){
    console.log("Test Pass")
}
else{
    console.log("Test fail")
}


var num = 48

if(num < 50) {
    console.log("Numero Menor")
}

if(num == 50) {
    console.log("Numero Menor")
}

if(num = 50) {
    console.log("Numero Menor =")
    console.log(num)
}



if(num === 50) {
    console.log("Numero Menor ===")
    console.log(num)
}

//Tarea investigar diferencias entre = == ===


var num2 = 48
var foo = 7
var bar = 5

if (num<num2 && foo>bar){
    console.log("Pass AND")
}

if (num<num2 || foo>bar){
    console.log("Pass OR")
}

var notTrue = false;

if(!notTrue){
    console.log("El valor es negar:" + notTrue)
}
if(notTrue){
    console.log("El valor es sin negar :" + notTrue)
}


//Ejemplo de Switch

var rango="Coronel"

switch(rango){
        case "Soldado razo":
            console.log("no autorizado")
        case "Comandante":
            console.log("Necesita autorizacion")
        case "Capitan":
            console.log("Autorizacion requerida")

        case "General":
            console.log("Usuario autorizado")
        
        default:
            console.log("Respuesta default")
        }

        var opciones=43

        switch(opciones){
                case 0:
                    console.log("no autorizado")
                    break;
                case 1:
                    console.log("Necesita autorizacion")
                    break;
                case 2:
                    console.log("Autorizacion requerida")
                    break;
        
                case 43:
                    console.log("Usuario autorizado")
                    break;
                
                default:
                    console.log("Respuesta default de numeros")
                }


//Tarea investigar un ejemplo de switch con numeros


var day = 3;
var dayName;
switch (day) {
    case 1:
        dayName = 'Sunday';
        break;
    case 2:
        dayName = 'Monday';
        break;
    case 3:
        dayName = 'Tuesday';
        break;
    case 4:
        dayName = 'Wednesday';
        break;
    case 5:
        dayName = 'Thursday';
        break;
    case 6:
        dayName = 'Friday';
        break;
    case 7:
        dayName = 'Saturday';
        break;
    default:
        dayName = 'Invalid day';
}
console.log(dayName); // Tuesday

//Tarea funcion

function myFunction(myArgument1, myArgument2){
    var resultado
    resultado = myArgument1 + myArgument2
    return resultado
}

console.log(myFunction(5,8))

function checkNumber(myNumber){
    //var myNumber
    if (myNumber == 42) {
        console.log("correct")
    }
    else{
        console.log("incorrect")
    }
}

checkNumber(3)

