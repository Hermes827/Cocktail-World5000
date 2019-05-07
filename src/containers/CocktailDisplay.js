import React from "react";
import CocktailDisplayCocktail from "../components/CocktailDisplayCocktail";

const CocktailDisplay = props => {
  return (
    <div className="CDdiv">
      <h1 className="CDh1">Cocktail Display</h1>
      {
          props.myCocktails.map((cocktail)=> {
            return <CocktailDisplayCocktail
                    cocktail={cocktail}
                    cocktailDescription={cocktail.description}
                    />
          })
        }

    </div>
  );
};

export default CocktailDisplay;
