import {Bird} from './Bird.js'

class Eagle extends Bird {
    constructor(name, color, wings, canFly){
        super(name, color, wings, canFly)
        this.sound = 'Tiow tiow 🦅'
    }
}

export {Eagle}