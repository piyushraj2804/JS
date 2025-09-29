//var c=300
let a=300
if(true){
    let a=10
const b=20
//console.log("inner:",a)
}


//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username="piyush"
    function two(){
        const websites="youtube"
        console.log(username);
    }
    //console.log(website);
two()
}
//one()

if(true){
    const username="piyush"
    if(username ==="piyush"){
        const website=" youtube"
        console.log(username+website);
    }
    //console.log(website);
}
//console.log(username);


addone(5)
function addone(num){
    return num+1

}



const addtwo=function(num){
    return num+2
}
addtwo(5)