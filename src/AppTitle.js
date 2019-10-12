import React from 'react'

const generateArray = (n) => Array.from({length: n}, (v, k) => k+1);
const generateRandomArray = (n) => Array.from({length: n}, (v, k) => Math.round(Math.random()*24 +1 ));

const AppTitle = () => (   
  "Lab1.ex3 = " + generateRandomArray(10).toString()
   )

console.log(generateArray(10))
console.log(generateRandomArray(10))

export default AppTitle