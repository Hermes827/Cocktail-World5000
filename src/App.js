import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CocktailContainer from "./containers/CocktailContainer";
import CocktailDisplay from "./containers/CocktailDisplay";
import CocktailForm from "./components/CocktailForm"
import CocktailDisplayCocktail from "./components/CocktailDisplayCocktail"

const URL = "http://localhost:3000/api/v1/cocktails/"

class App extends Component {

  constructor(){
    super()
    this.state = {
      cocktails: [],
      myCocktails: []
    }
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({
        cocktails: data
      })
    })
  }



addCocktail = (cocktail) => {
  this.setState({
    myCocktails: [cocktail]
  })
}



createNewCocktail = (state) => {
  console.log(state)
  let newCocktail = {
    name: state.name,
    description: state.description,
    instruction: state.instruction,
    source: state.source
  }
  this.setState({
    cocktails: [...this.state.cocktails, newCocktail]
  })
}

  render() {

const {cocktails, myCocktails} = this.state

    return (
      <div className="main-container">
        <div className="id">
        <CocktailForm
          createNewCocktail={this.createNewCocktail}
          />
        </div>

        <CocktailContainer
          cocktails={cocktails}
          addCocktail={this.addCocktail}
          />
        <CocktailDisplay
          myCocktails={myCocktails}
           />

      </div>
    );
  }
}

export default App;
