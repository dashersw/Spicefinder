// The idea is to find spices for specific recepies. 
// For now I have just one-to-one copied the logic of the 
// meetup example from the first class to practice, try to understand+remember. 

// But the problem is that it's not clear to me how adding a second interaction should work:
// lookfor in line 47 - as in find the spices in your kitchen 
// - one spice can only be at one location, there for not a list?!
// I am probably missing something very basic here, but I thought I would ask 
// instead of struggling for (another few) hours. Thank you for the help!

var Spice = class {
    constructor(name,where) {
        this.name = name
        this.where = where
        this.recepies = [] 

    }

    addto(recepie) {
        this.recepies.push(recepie)
        recepie.ingredients.push(this)

    }
}

var blacksalt = new Spice ('Black salt', 'Bottom shelf')
var tamarindpowder = new Spice ('Tamarind powder', 'Top shelf')
var cuminseeds = new Spice ('Cumin seeds', 'Drawer')

var Recepie = class {
    constructor(name) {
         this.name = name
         this.ingredients = []

    }  
}

var chaatmasala = new Recepie ('Chaat Masala')
var masalapotatoes = new Recepie ('Masala Boiled Potatoes')

var Location = class {
    constructor(where) {
        this.where = where

    }

    lookfor(where) {
    // ??
    }
}
var bottomshelf = new Location ('Bottom shelf')
var topshelf = new Location ('Top shelf')
var drawer = new Location ('Drawer')

blacksalt.addto(chaatmasala)
tamarindpowder.addto(chaatmasala)
tamarindpowder.addto(masalapotatoes)
cuminseeds.addto(chaatmasala)
cuminseeds.addto(masalapotatoes)


// when I try this, I always get the error 'cuminseeds.lookfor is not a function'
// but as of now I see no difference between eg. cuminseeds.addto(masalapotatoes) and this one..  
cuminseeds.lookfor(drawer)


console.log(chaatmasala)
console.log(masalapotatoes)