import React from 'react'

const generateArray = (n) => Array.from({length: n}, (v, k) => k+1);
const generateRandomArray = (n) => Array.from({length: n}, (v, k) => Math.round(Math.random()*24 +1 ));
const NumberArray = [2, 56, 23, 88, 17, 4];

const AppTitle = () => (   
  "Lab1.ex4 = " + NumberArray.filter(n => n>15).toString()
   )

console.log(generateArray(10))
console.log(generateRandomArray(10))
console.log(NumberArray.filter(n => n>15))

export default AppTitle