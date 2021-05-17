//destructuring Array
let fruit=["apple",'mango','banana','kiwi','orange','pineapple','gwava','papaya']
let [fruit1,,fruit3,fruit4="unknown fruit",...restfruit]=fruit
console.log(fruit1)
console.log(fruit3)
console.log(fruit4)
console.log(restfruit)