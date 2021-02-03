import {Animal} from './Animal.js'

class Bird extends Animal {
    constructor (name, color, canFly, wings){
        super (name, color)
        this.sound = 'Kur kur 🐔 Fyy fyy 🦜 Tiow tiow 🦅'
        this.skinCover = 'feathers'
        this.environment = 'sky'
        this.wingsCount = wings || 2
        this.canFly = canFly ?? true

    }
    flyAway () {
        if (this.canFly) {
            console.log(`${this.name} has ${this.wingsCount} wings and can fly!!!`);
        } else {
            console.log(`${this.name} has ${this.wingsCount} wings, but cannot fly...`);
        }
    }
}

export { Bird }