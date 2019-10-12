import React from 'react'
import { render } from 'react-dom'
import AppTitle from './AppTitle'


const MyApp = () => (
 <div>
  <h1>Minimal React</h1> 
  <p>Bundle size: 129 bytes, Load time of the bundle: 248 ms, Last commit SHA1: 962036334d2613fad275bc37cd2eb01c1f99b6ba</p> 
  </div>

)

render(<AppTitle />, document.getElementById('apptitlediv'))

export default MyApp