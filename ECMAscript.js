//Default Parameters
function someval()
{
    return 10;
}
function add(a,b=20,c=someval())
{
    return a+b+c;
}
console.log(add(5))