import React from "react";
import Proportion from "../components/Proportion";

const cocktailURL = "http://localhost:3000/api/v1/cocktails/"

class CocktailDisplayCocktail extends React.Component {

constructor(){
  super()
  this.state = {
    name: "",
    description: "",
    instructions: "",
    source: "",
    proportions: []
  }
}

componentDidMount(){
fetch(cocktailURL + `${this.props.cocktail.id}`)
.then(res => res.json())
.then(data => {
  console.log(data.proportions)
  
    this.setState({
      name: data.name,
      description: data.description,
      instructions: data.instructions,
      source: data.source,
      proportions: data.proportions

    })
  })
}


render(){

  return (
    <div className="CDCdiv">
      <br/>
      <h1>{this.state.name}</h1>
        <br/>
        <h2>Description:</h2>
      <h2>{this.state.description}</h2>
        <br/>
        <h2>Instructions:</h2>
      <h2>{this.state.instructions}</h2>
      <br/>
      <h2>Source:</h2>
      <h2>{this.state.source}</h2>
      <ul>{
        this.state.proportions.map((ingredient)=> {
          return <Proportion
                  ingredient={ingredient}
                  />
        })
          }</ul>
    </div>
  );
};
}

export default CocktailDisplayCocktail;
