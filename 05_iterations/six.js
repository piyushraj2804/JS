const coding=["js","rb","py","java","cpp"]

const values=coding.forEach((item)=>{
    console.log(item);
    return item
})

console.log(values);


const mynum=[1,2,3,4,5,6,7,8,9,10]

const newNums =mynum.filter((num)=>{
    return num>4})
console.log(newNums);

