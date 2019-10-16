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
    
    myFunction =() => {
      let tmp =parseInt(this.state.a,10)
      const x = this.generateArray(this.state.b-tmp+1)
      for(var i =0; i<x.length;i++)
        x[i]=x[i]+parseInt(tmp,10)-1;

      console.log(x)   
      return x;  
}
    render() {
      let x =[]
      if(parseInt(this.state.a,10)<this.state.b && parseInt(this.state.a,10)>0)
        {x = this.myFunction()}
      return (
        <form>       
        <input type='number'onChange={this.myChangeHandler}/>
        <input type='number'onChange={this.myChangeHandler2}/>
        <p>{x.toString()}</p>
        </form>
      );
    }
  }
  
  ReactDOM.render(<MyForm />, document.getElementById('lab2'));

//export default MyForm





