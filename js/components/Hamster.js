import{Pet} from './Pet.js'

class Hamster extends Pet {
    constructor (name, color){
        super(name, color)
        this.sound = 'Pyyyp pyyyp 🐹'
        this.canEatTillDeath = true
    }
}

export {Hamster}