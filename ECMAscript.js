//Inheritance es6
class Catagory{
    dryfruit()
    {
        return "almond is dry fruit"
    }
    pomefruit()
    {
        return "apple is pome fruitS"
    }
}
class friuts extends Catagory{
    constructor()
    {   //parent class ka constructor call krna jaruri hai
        super()
        console.log("constructor")
    }
    getFruit()
    {
        return "you got fruit"
    }

}
let f1 =new friuts
console.log(f1.getFruit())
let c1=new Catagory;
console.log(c1.dryfruit())
console.log(f1.pomefruit())
//error in console.log(c1.getFruit())