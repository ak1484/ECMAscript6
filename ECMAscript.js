//Arrow function
let a = [20, 4, 5, 12, 6];
// function test1()
// {return console.log("test1")}
// //normal
// test1()
// let test2=function()
// {return console.log("test2")}
// //anonymus
// test2()
// test3=()=>
// {return console.log("test3")}
// //arrow fun
// test3()
// let newa=a.map((i)=>i*2)
// console.log(newa)
let item = {
  name: "ankit",
  getName: function () {
    console.log("normal", this);
  },
  getNameArrow:()=> {
    console.log("arrow", this);
  },
};
//khud ka this call kra
//this.getName.bind(this) for parent this
item.getName();
//parent ka this call krta hai tabhi
//()=>this.test() ye apne parent ka he this uthata hai
item.getNameArrow();
