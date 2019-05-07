import React from "react";

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
        <input value="submit" type="submit"/>
      </form>
    )
  }
}

export default CocktailForm;
