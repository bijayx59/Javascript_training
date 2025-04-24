//SYMBOL
const MySymbol = Symbol('abc')
console.log(MySymbol); //used to generate unique key(in object), will cover later
console.log(typeof MySymbol);

//NULL (no value)

let MyNullVariable = null;
console.log(MyNullVariable);
console.log(typeof MyNullVariable); //(BIGGEST BUG IN JS WORLD)

//TYPE CONVERSIONS

let myNumber ='10'
console.log(myNumber + 10); //+ is an operator polymorphism (polu -> many) (morpj -> form)
let MyConvertedNumber = Number(myNumber);
console.log(MyConvertedNumber +10);

let MyConvertednumber = BigInt(myNumber);
console.log(MyConvertednumber);

//SOME TWEAKS (EDGE CASES) WHILE CONVERTING TO NUMBER TYPE 

let MyTweak = Number(100n);
console.log(MyTweak);



let myTweak = Number(false);
console.log(myTweak);

let tweak = Number('Bijay');
console.log(tweak);
console.log(-true/false);
// let oneTweak = string('true');



//number case

let mynumberboolean = Boolean(0.3434);
console.log(mynumberboolean);


//string case

let myboolean = Boolean('1');
console.log(myboolean);

//conversion to string type from different other types

let mystringtype = String(Infinity); // if the word is outside semicolon and word is pre define it will come as string if word is like not added example(bijay) it will come error
console.log(mystringtype);

//Type coertion
console.log('100' - '80');

console.log('100' + 200);
// console.log(Number)




