// day 6 
// slice , substring , replace | string modification methords 

const string = "helloworld"

const slicing  = string.slice(0,6)

console.log(slicing);

// it is using to slice the helloworld from index of 0 to 6 it is also includes a loop inside that slice function 
// this means when starting point is negaative it will looping through backside

const text = "javascript is a single thread and syncronouss language "

const replacing = text.replace("language", "script language")

console.log(replacing);

// this methord is used to replace the string value it means like this language changed to script language


const sub = 'hello javascript '

const num = sub.substring(1 , 5)

console.log(num);

// this methord is also get values from textes or strings it is also used a loop and spliting inside the function substring 
// it is not used negative indexes and not support in arrays 
// it is only support strings 

