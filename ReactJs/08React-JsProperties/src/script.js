let numbers = [1,2,3,4,5];
  const sum = numbers.reduce((prev,curr)=>prev += curr);
  console.log(sum);

  const finder = numbers.find(num=>num > 1);
  const indexFinder = numbers.findIndex(num=> num > 1);
  console.log(finder);
  console.log(indexFinder)

import emojipedia from "./emojipedia.js";



const ansArray = emojipedia.map(
    it => it.meaning.substring(0, 99)
);
console.log(ansArray);