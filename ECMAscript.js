//find and findIndex
let a=[10,20,7,50,1,100]
console.log(a.find((i)=>i>20))
console.log(a.find((i)=>i>20 && i<100))
console.log(a.findIndex((i)=>i>20))
console.log(a.findIndex((i)=>i>20 && i<100))
let data=[
    {id:1,name:'a'},
    {id:5,name:'b'},
    {id:3,name:'c'},
    {id:9,name:'d'},
    {id:2,name:'e'},
]
function costum(i)
{
    return i.id>3;
}
console.log(data.find(costum))
console.log(data.findIndex(costum))