import React from 'react'; //get the react data
import Button from './components/Button';
import Board from './components/Board';

class App extends React.Component { //extends to get all methods and proparities from Component class
  render(){
    return(
      <div>
        <p>Hello</p>
        <h3>From ASAC</h3>
        <Button />
        <Board />
      </div>  
    )
  }
}

export default App;