import React from 'react'
import { render } from 'react-dom'
import MyApp from './MyApp'
import Lab2 from './Lab2'

console.log("abc")
console.time("Render - " );
render(<Lab2 />, document.getElementById('reactinjectedhere'))
console.timeEnd("Render - ");
