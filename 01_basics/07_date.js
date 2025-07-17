let mydate=new Date()
//console.log(mydate.toString())
//console.log(mydate.toDateString())
//console.log(mydate.toJSON())
//console.log(typeof mydate)


let mycreateddate=new Date(2023,0,23)
//console.log(mycreateddate.toLocaleString())

let ee=new Date("2023-01-14")
//console.log(ee.toDateString())



let mytimestamp=Date.now()
//console.log(mytimestamp)
//console.log(ee.getTime())
//console.log(Math.floor(Date.now()/1000))

let newdate=new Date()
console.log(newdate)
console.log(newdate.getMonth())
console.log(newdate.getDay())


newdate.toLocaleString('default',{ weekday:"long"
})