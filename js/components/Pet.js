import {Animal} from './Animal.js'

class Pet extends Animal {
    constructor (name, color){
        super(name, color)
        this.sound = 'Au au 🐶, miau 😺, pyyp pyyyp 🐹'
        this.skinCover = 'fur'
        this.environment = 'land'
    }

}

export { Pet }