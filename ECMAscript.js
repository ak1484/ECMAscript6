//classes ecma 6 me aaya tha
class Fruits{
    //let and var not use
    name="orange"
    constructor()
    {
        console.log("constructor",this.name)
    }
    getFruits(i)
    {
        return i
    }
}
// let f1=new Fruits();
let f1=new Fruits;
console.log(f1.getFruits("apple"))
console.log(f1.name)