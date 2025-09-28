//Object.create


const mySym=Symbol("key1")



const Jsuser={
    name:"Piyush",
    [mySym]:"mykey1",
    age:20,
    location:"Ranchi",
    email:"pr9056549@gmail.com"
}

//console.log(Jsuser.name)
//console.log(Jsuser["email"])
//console.log(Jsuser[mySym])


Jsuser.email="pr9033"
//Object.freeze(Jsuser)


Jsuser.greeting = function(){
    console.log("Hello JS user");
}
Jsuser.greeting2 = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(Jsuser.greeting())
console.log(Jsuser.greeting2())


