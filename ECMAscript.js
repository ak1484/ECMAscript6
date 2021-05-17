//Spread Operator
let fruit=['apple','banana','kiwi']
let other=['orange','pineapple','guvava']
let total=[...fruit,...other]
console.log(total)
//spread
function P(a,b,c){
    console.log(a,b,c)
}
P(...fruit)
function Px(...a)
{//rest
    console.log(a)
}
P(...other)
//copy kiya isliye
let newFruit=[...fruit]
newFruit.push("test")
console.log(newFruit)
console.log(fruit)
//reference gya isliye
let newother=other
newother.push("test1")
console.log(newother)
console.log(other)