// day-3
// math floor , math random , mathmax

let random = Math.floor(Math.random()*561515516)
console.log(random);

let max = Math.max(Math.round(Math.floor(Math.random()*5000)))
console.log(max);

let array = [10,455,500,888]

let largest = Math.max(...array)
let smallest = Math.min(...array)
console.log(largest);
console.log(smallest)


let num = [1,50,100,80,75,90]

let larg = [0]
let secondlarge = [0]


for(let i = 0 ; i<num.length ; i++){
    if(num[i]>larg){
       larg = num[i]
    }else if(num[i]>secondlarge && num[i]!==larg){
        secondlarge = num[i]
    }
   
}

console.log(larg);
console.log(secondlarge);






