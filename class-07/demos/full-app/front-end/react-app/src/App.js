import React from 'react';
import axios from 'axios';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      pokeInfo : {},
      pokeNames:''
    }
  }

  getPokeNames = async () => {
    //localhost:3010/getPokeNames
    let serverURL = process.env.REACT_APP_SERVER;
    const url = `${serverURL}/getPokeNames`;
    const pokemons = await axios.get(url);
    // console.log(pokemonItem.data);
    this.setState({
      pokeNames:pokemons.data
    })
    console.log(pokemons.data);

  }
  getPokemonData = async () => {
    //localhost:3020/getPoke?pokeName=bulbasaur
    let serverURL = process.env.REACT_APP_SERVER;
    const url = `${serverURL}/getPoke?pokeName=bulbasaur`;
    const pokemonItem = await axios.get(url);
    // console.log(pokemonItem.data);
    this.setState({
      pokeInfo:pokemonItem.data
    })



  }
  
  render(){
    return(
      <div>
        <h1>Front-end</h1>
        <button onClick={this.getPokemonData}>Get Poke Data</button>
        <button onClick={this.getPokeNames}>Get Pkemons names</button>
        <p>{this.state.pokeInfo.name}</p>
        <p>{this.state.pokeInfo.url}</p>
        <p>{this.state.pokeNames[0]}</p>
      </div>
    )
  }
}

export default App;