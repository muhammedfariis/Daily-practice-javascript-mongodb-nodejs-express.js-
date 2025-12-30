// day 6 
// string and patters 

const text = " language programming is javascript"

const spliting = text.split("")

const reverses = spliting.reverse()

const final = reverses.join("")

console.log(final);

// this string is reversed perfectly the logic is when you want to reverse a string first split it will 
// return as an array of splitted and then reverse can we apply and then join it it thats all 




function palidrome(palidrome = "radar"){
   let palidroming = palidrome.split(" ").reverse().join("")
   return palidroming 
}
console.log(palidrome());

// this function for palidroming and palidrom means same string after backword and frontword and i used same concept split reverse and join but only differnce is used as in function 
