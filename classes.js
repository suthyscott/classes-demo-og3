// const fruit = new Array('berry', 'apple', 'cherry')

// console.log(fruit)

class Cat {
    constructor(name, hunger = 100){
        // this = {}
        this.name = name
        this.hunger = hunger
        this.mood = 'happy'
    }

    greet(){
        console.log(`Meow, I'm a ${this.name} the cat`)
    }
    
    graduate(){
        this.name = `Dr. ${this.name}`
        this.greet()
    }
}

Cat.prototype.species = 'Felis catus'

const felix = new Cat('Felix')
const ezra = new Cat('Ezra', 90)

// felix.graduate()
// ezra.greet()
felix.species = 'Party animal'

console.log(felix.species)
console.log(ezra.species)
