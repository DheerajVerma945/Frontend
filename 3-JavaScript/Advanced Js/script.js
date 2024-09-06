// setTimeout(()=>{
//     console.log("Hello World");
// },2000);

// setTimeout(()=>{
//     console.log("Hello World 2");
// },4000);

// console.log("Immediate action");


// function calc(a,b,sumcallback){
//     sumcallback(a,b);
// }
// calc(3,5,(a,b)=>{
//     console.log(a+b)
// });


// Callback with Timeout 

// function greetList(greet,greetCallback){
    
    
// }


// //Callback Hell (Nested CallBacks)
// greetList("Hello",()=>{
//     greetList("Hi",()=>{
//         greetList("Hey");
//     });
// })


// function greetList(greet,greetCallback){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             // console.log(greet);
//             reject("Unsuccesfull");
//             if(greetCallback){
//                 greetCallback();
//             }
//         },0 ); 
//     });
// }

// let promise = greetList("Hello");
// console.log(promise);


// const getpromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         // console.log("Successful");
//         // resolve("Done");
//         reject("Some Error");
//     });
// }
// let promise = getpromise();
// // promise.then((state)=>{
// //     console.log("Promise ",state);
// // });
// promise.catch((error)=>{
//     console.log("Error",error);
// })

//Promise chaining

// function greetList(greet){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(greet);
//             resolve("Successful");
//         },2000); 
//     });
// }
// greetList("Hello").then(()=>{
//     return greetList("Hi")
// }).then(()=>{
//     return greetList("Hey");
// }).then((res)=>{
//     console.log(res);
// })
// greetList("Hello").then(()=>{
//     return greetList("Hi").then(()=>{
//         return greetList("Hey").then((res)=>{
//             console.log(res);
//         })
//     })
// })

function greetList(greet){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Hello",greet);
            resolve("Successful");
        },1000); 
    });
}
(
    async function (){
        for(let i =1;i<11;i++){
            await greetList(i);
        }
    }
)();
// greetNow();
