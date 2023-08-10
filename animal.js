class Animal {
    constructor(name, species, hunger = 100){
        this.name = name
        this.species = species
        this.hunger = hunger
    }

    greet(greeting = "Hello"){
        console.log(`${greeting}, I'm ${this.name} the ${this.species}`)
    }
}

class Cat extends Animal {
    constructor(name, hunger=100){
        super(name, 'cat', hunger)
        this.breed = 'tabby'
    }
    greet(){
        // Animal.greet()
        super.greet('Meow')
    }
}

const rover = new Animal('Rover', 'dog')
const ezra = new Cat('Ezra')
const rhino = new Animal("Rhino", 'hamster')

console.log(ezra)

rover.greet()
ezra.greet()

// rhino.greet()