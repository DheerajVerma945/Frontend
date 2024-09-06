// function vowels(string){
//     let ans = 0;
//     for(const char of string){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
//             ans++;
//         }
//     }
//     return ans;
// }4
// let vowels =(string) =>{
//     let ans = 0;
//     for(const char of string){
//         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
//             ans++;
//         }
//     }
//     return ans;
// }
// console.log(vowels("dheeraj"));
// let arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     console.log(val);
// })
// arr.forEach((nums) =>{
//     console.log(nums*nums);
// })
// arr.map((nums)=>{
//     console.log(nums);
// })

// let newArr = arr.filter((nums)=>{
//     return nums%2 !== 0;
// })
// console.log(newArr);
// let sum = arr.reduce((ans,val)=>{
//     return ans < val ? ans : val;
// })
// console.log(sum);


// Q1
// let marks = [76,96,57,91,93,92];
// let newMarks = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(newMarks);


// Q2
let n =7;
let array = [];
for(let i=1;i<=n;i++){
    array[i-1] = i;
}
// console.log(array);
let sum = array.reduce((ans,val)=>{
    return ans+val;
})
let product = array.reduce((ans,val)=>{
    return ans*val;
});
console.log(sum);
console.log(product);