const name="piyush"
const repoCount=3
//console.log(name+repoCount+"value");
console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
const gamename=new String('piyushraj')
console.log(gamename)

console.log(gamename.__proto__)
console.log(gamename.length)
console.log(gamename.toUpperCase())


const newString=gamename.substring(0,4)
console.log(newString)

const anotherstring=gamename.slice(-8,4)
console.log(anotherstring)

const newStringOne="      piyush   "
console.log(newStringOne.trim())


const url="youtube.com"

console.log(url.replace())
console.log(url.includes('youtube'))