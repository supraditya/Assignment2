import React, {Component} from 'react';
import Validation from './Validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {
  state={
    stringLength:0,
    inputValue:"",
    inputArray:[],
    inputObj:[]
  }
  inputLengthHandler=(e)=>{
    let str=e.target.value;
    let arr=str.split("");
    let obj=[];
    for(let i=0;i<arr.length;i++)
    {
      obj.push({id:i, value:arr[i]});
    }
    this.setState({
      stringLength: str.length,
      inputValue: str,
      inputArray: arr,
      inputObj:obj
    })

  }
  charDeleteHandler=(index)=>{
    //Index of character passed here
    console.log(index)
    const char2=[...this.state.inputObj];
    char2.splice(index, 1);
    for(let i=0;i<char2.length;i++)
    {
      char2[i].id=i;
    }
    console.log(char2);
    const newstr=this.state.inputValue.slice(0,index)+this.state.inputValue.slice(index+1);
    this.setState({
      inputObj: char2,
      inputValue: newstr,
      stringLength: newstr.length
    });
  }
  render()
  {
    return (
      <div className="App">
        <h1>App is working</h1>
        <p>(Clicking on any character card will delete it from the string!)</p>
        <label>Enter text here: <input onChange={(event)=>this.inputLengthHandler(event)} value={this.state.inputValue}></input></label>
        {/* <p>Current paragraph length: {this.state.stringLength} </p> */}
        <Validation length={this.state.stringLength}/>
        <div>
          {this.state.inputObj.map((object)=>{
            return(
              <Char letter={object.value} click={()=>this.charDeleteHandler(object.id)} key={object.id}/>
              /*Character was fine, prop variable 'letter' was not properly used in char.js*/
            );
          })}
        </div>
      </div>
    );
  }

}

export default App;
