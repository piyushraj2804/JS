const useremail=[]

//if(useremail){
//    console.log("got user email");

//}else{
//    console.log("dont have user email");
//}



//falsy values

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0" , 'false'," ", [], {}, function(){}

//if(useremail.length===0){
 //   console.log("array is empty");
//}
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("obj is empty");
}


//Nullish coalescing operator (??): null undefined

let val1;
//val1 = 5 ?? 10
//val1=null ?? 10
//val1=undefined ?? 15
val1=null ?? 10 ?? 25
console.log(val1);


/// terniary operator

const iceteap=100
iceteap <=80 ? console.log("less than 80"): console.log("more than 80");
