var animal = {
    type:'Invertebrados',
    displayType: function(){
        console.log(this.type)
    }
}

var animal67 = Object.create(animal)
animal67.displayType();
animal67.type='pez'
animal67.displayType();