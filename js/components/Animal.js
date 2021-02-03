class Animal {
    constructor (name, color){
        this.name = name
        this.color = color
        this.sound = 'Not specified 😺🐯🦒🦊🐻🐭🐷🦝🐵🦓🦍🐒🐕‍🦺'
        this.skinCover = 'Not specified (fur/feathers/scales)'
        this.environment = 'Not specified (land/water/sky)'
    }

    voice() {
        console.log(`${this.name} says: ${this.sound}`);
    }

    introduce() {
        console.log(`Hi, I am ${this.name}, my habitation is ${this.environment}, ${this.skinCover} is ${this.color} color and I say ${this.sound}`);
    }
}

export {Animal}