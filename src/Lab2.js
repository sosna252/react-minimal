import React from 'react'
import ReactDOM from 'react-dom';

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { a: 0, b: 0, counter: 0, array: []};
    }
    generateArray = (n, x) => Array.from({length: n}, (v, k) => k+x);
    SquareRootArray = (array) => array.map(Math.sqrt);
    
    myChangeHandler = (event) => {
      let tmp = parseInt(event.target.value,10)
      this.setState({a: tmp});
      this.setState({counter: this.state.counter+1});
      if(this.state.b>tmp && tmp>0)
        this.setState({array: this.generateArray(this.state.b-tmp+1,tmp)})
      else
        this.setState({array : []})
      console.log("Value changed a: " + event.target.value) 
    }
    myChangeHandler2 = (event) => {
        let tmp = parseInt(event.target.value,10)
        this.setState({b: tmp});
        this.setState({counter: this.state.counter+1});
        if(this.state.a<tmp && this.state.a>0)
          this.setState({array: this.generateArray(tmp-this.state.a+1,this.state.a)})
        else
          this.setState({array : []})
        console.log("Value changed b: " + event.target.value)
    }
    
    myFunction = (event) => 
    {
      event.preventDefault()
      this.setState({array: this.SquareRootArray(this.state.array)})
    }

    render() {    
      console.time("Render - " + this.state.counter);
      let y =[]

      return (
        <form>       
        <input type='number'onChange={this.myChangeHandler}/>
        <input type='number'onChange={this.myChangeHandler2}/>
        <p>{this.state.array.toString()}</p>

        <button onClick = {this.myFunction}>Process array</button>

        {console.timeEnd("Render - " + this.state.counter)}        
        </form>
      );
    }
  }
  

export default MyForm





