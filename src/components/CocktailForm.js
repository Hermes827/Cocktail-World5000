import React from "react";

const backendURL = "http://localhost:3000/api/v1/cocktails"

class CocktailForm extends React.Component {

createCocktail = () => {
  let inputs = document.querySelectorAll(".input")
  let name = inputs[0].value
  let description = inputs[1].value
  let instructions = inputs[2].value
  let source = inputs[3].value
  let ingredient = inputs[4].value
  let amount = inputs[5].value


    //Drink
  let info = {
    name: name,
    description: description,
    instructions: instructions,
    source: source,
    proportions: [
      {
        ingredient: ingredient,
        amount: amount
      }
    ]
  }

  // Recipe
//   {
//     Ingredient : name
//     ammount: integer
// }
  console.log(info, '-=---info')

  fetch(backendURL, {

    method: "POST",
    body: JSON.stringify(info),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(data => {
      console.log(data, '-----49')

    })
  }

  constructor(props){
    super(props)
      this.state = {
        name: ""
      }
  }

handleChange = (ev) => {
  let name = ev.target.value
  this.setState({
    [ev.target.name]: ev.target.value
  })
  console.log(name)
}

handleSubmit = (ev) => {
ev.preventDefault()
this.props.createNewCocktail(this.state)
this.createCocktail()
this.setState({
  name: "",
})
}


  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        //need to insert photo here of cocktail
        <h1 className="CFh1">Add a drink!</h1>
        <input
          className="input"
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
          />
          <br/>
          <input
            className="input"
            type="text"
            name="description"
            placeholder="description"
            value={this.state.description}
            onChange={this.handleChange}
            required
            />
          <br/>
          <input
            className="input"
            type="text"
            name="instructions"
            placeholder="instructions"
            value={this.state.instructions}
            onChange={this.handleChange}
            required
            />
          <br/>
          <input
            className="input"
            type="text"
            name="source"
            placeholder="source"
            value={this.state.source}
            onChange={this.handleChange}
            required
            />
          <br/>
          <h1>Proportions</h1>

            <input
              className="input"
              type="text"
              name="ingredient"
              placeholder="ingredient"
              />
              <input
                className="input"
                type="text"
                name="amount"
                placeholder="amount"
                />
              <button><button/>
        <input value="submit" type="submit"/>
      </form>
    )
  }
}


export default CocktailForm;
