import React from 'react'

const generateArray = (n) => Array.from({length: n}, (v, k) => k+1);

const AppTitle = () => (   
  "Lab1.ex1 = " + generateArray(10).toString()
   )

console.log(generateArray(10))

export default AppTitle