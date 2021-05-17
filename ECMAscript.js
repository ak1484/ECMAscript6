//Promise in es6
let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("some issues")
    },2000)
})
data.then((item)=>{
    console.log(item)
}).catch((err)=>{
    console.log("catch block",err)
})
// let data1=fetch('url')
// data1.then((result)=>{
//     return item.json()
// }).then((resp)=>{
//     console.log("output",resp)
// })