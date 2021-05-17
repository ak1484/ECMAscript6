//destructuring Object
//no skip yha key k hisab se destr hoti hi wha index k 
let user={name:"ankit",email:"ankit@test.com",mobile:99999,address:"poharka",work:"developer",degree:"btech"}
let {email,mob=888,mobile,...address}=user
console.log(email)
console.log(mob)
console.log(mobile)
console.log(address)