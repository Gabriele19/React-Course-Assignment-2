import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';


class App extends Component {
  state = {
    text: ''
  }

  textChangeHandler = (event) => {
      let text = this.state.text; //copy of the state
      text = event.target.value;
      this.setState({text: text});
  }

  deleteCharHandler = (index) => {
    const text = this.state.text.split(''); //from string to array
    text.splice(index, 1); //update array (remove char)
    const updatedText = text.join(''); //from array to string
    this.setState({text: updatedText});
  }


  render() {
    const charList =
      this.state.text.split('').map((char, index) => {
        return (
          <CharComponent char={char} key={index} clicked={() => this.deleteCharHandler(index)}/>
        );
      }
    )
  
    return (
      <div className="App">
        <input type="text" onChange={this.textChangeHandler} value={this.state.text}/>
        <p>{this.state.text}</p>
        <ValidationComponent textLength={this.state.text.length}/>
        {charList}
      </div>
    );
  }
}

export default App;
