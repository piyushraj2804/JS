//const tinderuser= new Object ()
const tinderuser={}
tinderuser.id="1234abc"
tinderuser.name="piyush"
tinderuser.isLoggedin=false
//console.log(tinderuser);
const regularuser={
    email:"pr@gmail.com",
    fullname:{
        userfullname:{
            firstname:"piyush",
            lastname:"raj",

        }
    }
}
//console.log(regularuser.fullname.userfullname);
const obj1={1:"a",2:"b"
}
const obj2={3:"c",4:"d"}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
//console.log(obj3);
const uder=[{
    id:1,
    emial:"pr@gmail.com"
},{
id:1,
    emial:"pr@gmail.com"
},
]
uder[1].emial
//console.log(tinderuser);
//console.log(Object.keys(tinderuser));
//console.log(Object.values(tinderuser));

//console.log(tinderuser.hasOwnProperty('isLoggedin'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInst:"piyush"
}

const {courseInst:inst}=course
console.log(inst);


/*{
    "name":"piyush",
    "coursename":"js in hindi",
    "price":"free"
}*/