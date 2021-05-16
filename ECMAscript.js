//Let keyword(let vs var)
var a=10
if(true)
{
    var a=20
    console.log(a)
}
console.log(a)
var a=10
if(true)
{
    let a=20
    console.log(a)
}
console.log(a)
// let a=20
// let a=10
// console.log(a)
//error
//hosting can't use with let but it can use with var
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 1000);
}
for (var i = 0; i < 10; i++) {
    setTimeout(() => console.log(i), 1000);
  }
