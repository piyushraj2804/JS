
function sayMyname(){
    console.log("P");
console.log("I");
console.log("Y");
console.log("U");
console.log("S");
console.log("h");
}

//sayMyname()

/*function add(n1,n2){
    console.log(n1+n2);
}*/

function add(n1,n2){
    //let result=n1+n2
    //return result
    return n1+n2
}


const result=add(3,4)
//console.log(result);

function loginusermsg(username){
    if(username===undefined){
        console.log("pls enter a username")
        return

    }
    return `${username } just logged in`
}

//console.log(loginusermsg())

function calccartprice(...num1){
    return num1

}
//console.log(calccartprice(200,400,500))
const user={
    username:"piyush",
    price:159
}
function handleobj(anyobj){
    console.log(`username is ${(anyobj.username)} and price is ${anyobj.price}`)
}
//handleobj(user)

handleobj({
    username:"sam",
    price:399
})
const newArray=[200,400,10,600]
function returnsecval(getarray){
    return getarray[1]
}
console.log(returnsecval(newArray));