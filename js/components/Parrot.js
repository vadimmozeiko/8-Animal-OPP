import {Bird} from './Bird.js'

class Parrot extends Bird {
    constructor(name, color, canFly){
        super(name, color, canFly)
        this.sound = 'Fyy fyy 🦜'
    }
}

export {Parrot}