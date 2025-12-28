// day 4 
// map , filter and how this works 

let numbers = [1,2,45,8,88,8,5,45,15,5,22]

let double = numbers.map((num)=>{
    return num * 2
})

console.log(double);


//  the map always returns new array with what that highorder function with callback function 


let ages = [10,50,9,45,70,65,42]

let filtering = ages.filter((age)=>{
    return age>=50
})

console.log(filtering);

// and the filter is always returns new array with what condition is it and this will always filtering the array what they want that only copy to new array and returns

