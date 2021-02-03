import {Bird} from './Bird.js'

class Chicken extends Bird {
    constructor(name, color, wings, canFly){
        super(name, color, wings, canFly)
        this.sound = 'Kur kur 🐔'
    }
}

export {Chicken}