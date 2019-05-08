let inputs = document.querySelectorAll(".input-text")
let daySelect = document.querySelector(".select-day")
let date = daySelect.value
let title = inputs[0].value
let content = inputs[1].value

let info = {
  name: name
}

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
    console.log(data)

  })

import React from "react";

const backendURL = "http://localhost:3000/api/v1/cocktails/"

class CocktailForm extends React.Component {


  constructor(props){
    super(props)
      this.state = {
        name: "",
        description: "",
        instructions: "",
        source: ""
      }
  }

handleChange = (ev) => {
  this.setState({
    [ev.target.name]: ev.target.value
  })
}

handleSubmit = (ev) => {
ev.preventDefault()
this.props.createNewCocktail(this.state)
this.setState({
  name: "",
  description: "",
  instructions: "",
  source: ""
})
}

fetch


  render() {
    return (
      <form onSubmit={this.handleSubmit} id="form">
        //need to insert photo here of cocktail
        <h1 className="CFh1">Add a drink!</h1>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
          required
          />
        <br/>
        <input
          type="text"
          name="description"
          placeholder="description"
          value={this.state.description}
          onChange={this.handleChange}
          required
          />
        <br/>
        <input
          type="text"
          name="instructions"
          placeholder="instructions"
          value={this.state.instructions}
          onChange={this.handleChange}
          required
          />
        <br/>
        <input
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
            type="text"
            name="ingredient"
            placeholder="ingredient"

            />
            <input
              type="text"
              name="amount"
              placeholder="amount"

              />

        <input value="submit" type="submit"/>
      </form>
    )
  }
}

export default CocktailForm;
