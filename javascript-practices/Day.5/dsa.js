// day 5 
// reduce main methord and how it works 

// find the sum 

const num = [1,2,3,4,5]
const sum = num.reduce((acc,curr)=>{
   return acc = acc + curr
},10)
console.log(sum);

// it will return sum of each index of that given array acc = index of the array curr = current value and that 10 = initial value  

const bigvalue = [10,500,40,60]

const max = bigvalue.reduce((acc,cur)=>{

     return cur>acc ? cur : acc

},bigvalue[0])
console.log(max);

// it will check if the accumilator hold biggest value and current value will loop throw the array check if it shorter it was ignore 

// so accumilator must return alwaysss