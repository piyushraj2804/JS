const user={
    username:"piyush",
    price:999,

    welcomemsg:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//user.welcomemsg()
//user.username="sam"
//user.welcomemsg()
//console.log(this);

/* function chai(){
    let username="piyush"
    console.log(this.username);
}
chai() */
const chai=()=>{
    let username ="piyush"
    console.log(this);
}
//chai()

//const addtwo=(n1,n2)=>n1+n2
//const addtwo=(n1,n2)=>(n1+n2)
const addtwo=(n1,n2)=>({username:"piyush"})
console.log(addtwo(3,4))
