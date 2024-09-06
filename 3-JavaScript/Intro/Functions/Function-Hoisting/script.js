// Function Hoisting is the process of shifting the function at the top level in current block 
// In Case of variables only its declaration is shifted to the top level not its assigned value and it ispossible only using "var" keyword not using "let" and "const"
// greet();  not possible here  "Reference error"
// let greet = function (){
//     console.log("Happy greeting");
// }
// greet();


// //Function pass as argument
// function greetMe(greet,Name){
//     console.log("Hello " + Name );
//     greet();
// }
// greetMe(greet,"Dheeraj");


// Array of functions
// const arr = [
//     function(a,b){
//         return a + b;
//     },
//     function(a,b){
//         return a - b;
//     },
//     function(a,b){
//         return a * b;
//     }
// ]
// let add = arr[0];
// console.log(add(3,6));

let obj = {
    age :25,
    wt :4,
    ht:165,
    greet:()=>{
        console.log("Hello Dunia");
    }
}
console.log(obj.age);
obj.greet();