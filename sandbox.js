class Character {
    constructor(name, gender, race, hp = 100){
        this.name = name
        this.gender = gender 
        this.race = race
        this.hp = hp
        this.xp = 0
        this.inventory = ['shovel', 'rope', 'apple']
    }

    attack(){
        return 25
    }

    addItem(items){
        if(Array.isArray(items)){
            items.forEach(i => this.inventory.push(i))
        } else {
            this.inventory.push(items)
        }
    }

    removeItem(item){
        const itemIndex = this.inventory.findIndex(invItem => invItem === item)
        this.inventory.splice(itemIndex, 1)
    }
}

// const genericChar = new Character("Bob", 'male', 'human', )

// console.log(genericChar)
// genericChar.addItem('potion')
// genericChar.removeItem('apple')
// console.log(genericChar)

class Rogue extends Character {
    constructor(name, gender, race){
        super(name, gender, race, 110)
        console.log(this)
        super.addItem(['dagger', 'Leather armor'])
    }
}

const jimothy = new Rogue('Jimothy', 'male', 'human')
jimothy.addItem('cloak')
console.log(jimothy)