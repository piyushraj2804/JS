//for of

//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

for(const num of arr){
    console.log(num);
}

//Maps

const map=new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('Fr',"France")

console.log(map);


for(const [key,value] of map){
    console.log(key,'-:',value);
}

const myObject={
    'game1':'NFS',
    'game2':'Spiderman'
}

