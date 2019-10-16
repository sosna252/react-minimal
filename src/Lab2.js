import React from 'react'
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { a: 0, b: 0 };
    }
    generateArray = (n) => Array.from({length: n}, (v, k) => k+1);

    myChangeHandler = (event) => {
      this.setState({a: event.target.value});
      console.log("Value changed a: " + event.target.value) 
    }
    myChangeHandler2 = (event) => {
        this.setState({b: event.target.value});
        console.log("Value changed b: " + event.target.value)
    }
    
    render() {
     
      return (
        <form>       
        <input type='number'onChange={this.myChangeHandler}/>
        <input type='number'onChange={this.myChangeHandler2}/>
        </form>
      );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('lab2'));

