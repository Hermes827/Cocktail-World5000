import React from "react";

const Cocktail = props => {



  return (
    <div onClick={()=> {
        props.addCocktail(props.cocktail)
        
      }
    }>

      <h2>{props.cocktail.name}</h2>

    </div>
  );
};

export default Cocktail;

//program crashes when I click on cocktail element that has been added to mycocktails
