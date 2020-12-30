function changeArray(elements){
    var longitud = elements.length
    var newArray = []
    for(var i = 0 ;i < (longitud - 1); i++ ){
        console.log(elements[i])
        newArray.unshift(elements[i])
        console.log("Variable: ", i)
    }
    return newArray
}

var array = [3,17,'Casa',1,50,true,11]
console.log(changeArray(array))

//Tarea 2 invertir con un solo arreglo

function changeArrayOne(elements){
    elements.sort();
    return elements;
}

var array = [3,2,1]
console.log(changeArrayOne(array))




//3. Three company asd a aaasssddd
function three(cadena){
    var n = cadena.length
    var output = ""

    for(var i=0; i<n; i++){
        var letra =cadena.charAt(i);
        output =  output + letra + letra + letra
    }
    return output
 }

console.log(three('casa'))
console.log(three('resa'))
console.log(three('yu'))

//Palindromo


function palindromo(cadena) {
    var re = /[\W_]/g;
    var lowRegStr = cadena.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    return reverseStr === lowRegStr;
  }
  console.log(palindromo("pepe"))
  console.log(palindromo("ana"))

//Tarea input
//marcia una manzana para marcia y una manzana para mi
//paco una manzana para Paco y una manzana para mi}
// "" c
    //Usando if 

function name(params) {
    if (params.length > 0){
        return ("Una manzana para " +params +" y una manzana para mi")
    }else{
        return("una manzana para ti y una manzana para mi")
    }
        
    }    

    console.log(name("Marcia"))
    console.log(name("Paco"))
    console.log(name(""))