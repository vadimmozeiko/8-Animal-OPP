import {Dog} from './components/Dog.js'
import {Cat} from './components/Cat.js'
import {Hamster} from './components/Hamster.js'
import {Chicken} from './components/Chicken.js'
import {Parrot} from './components/Parrot.js'
import {Eagle} from './components/Eagle.js'



const newDog  = new Dog('Jacky', 'gray');

newDog.introduce()

newDog.voice()

const newCat = new Cat('Mikky', 'white')

newCat.introduce()

newCat.voice()

const newHamster = new Hamster('Crokky', 'brown')

newHamster.introduce()

newHamster.voice()


const birdChicken = new Chicken('Chix', 'white', false);

birdChicken.introduce()
birdChicken.voice()
birdChicken.flyAway()


const birdEagle = new Eagle ('Woxy', 'brown')

birdEagle.introduce()
birdEagle.voice()
birdEagle.flyAway()
