// const a= "123";
// console.log("a");

// let b = 123;
// console.log(b);

// var c = "abc";
// console.log(c);

// const greet = alert("Hello mate!");
// console.log(greet);

// const age = prompt("How old are you?");
// console.log(age);

// let sure = confirm("Are you sure?");
// console.log(sure);

// let x = 1;
// let y = 2;

// if(x==1)
// {
//     console.log("x is 1");
// }

// if(x===1 && y ===2){
//     console.log("&& operator tested");
// }

// if(( x=1 ) || (y = 3)){
//     console.log("|| operator tested");
// }

// if(!x){
//     console.log("x is not correct!");
// }


// let x = 18;
// let y = 80;

// var age= parseInt(prompt("How old are you?"));

// if(age<18 || age>80){
//     console.log("You are not eligible to vote");
// }

// else if(age>=18 && age<=80){
//     console.log("Hello there citizen! You are eligible to vote!");
// }

// else{
//     console.log("We are a huge traffic right now!\n Please try later!");
// }



// Learning about ternerary operators

// let x =12;
// let result = x === 12 ? "x is correct!" : "x is incorrect!";
// alert(result);


//-------------------------Functions-------------------------------//

// Uses keyword "function"

// Syntax :
//                  function function_name(arg_1, arg_2,...)

//This is the traditional way

// function area(a,b){
//     console.log(a*b);
// }
// area(1,2);
// area(70,29);
// area(13,27);


// // Latest ES6 style to write functions

// const add = (a,b) => {
//     console.log(a+b);
// }

// add(7,3);


// Objects

// const person ={
//     firstName : "Bikram",
//     lastName: "Bhusal",
//     fullName: () => {
//         return `${person.firstName} ${person.lastName}`;
//     },
// };

// const c = person.firstName;
// const a = person.fullName();
// console.log(c,a);

// const school = {
//     principal: "John Smith",
//     vicePrincipal: "Aero Walker",
//     members:()=>{
//         return `${school.principal} ${school.vicePrincipal}`;
//     },
// };

// const a = school.members();
// console.log(a);

// Arrays

const arr = ["FZ-S","MT-15", "CBR",{name:"SZR"}];
// access the first item
const b = arr[0];
console.log(b);
// access the last time
const e = arr[arr.length-1];
console.log(e);

console.log(arr.length);
console.log(arr.sort());
console.log(arr.push("Pulsar"));
console.log(arr.pop());

