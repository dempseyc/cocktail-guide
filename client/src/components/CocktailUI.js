import React from "react";
import { connect } from 'react-redux';
import Cocktail from './Cocktail.js'

class CocktailUI extends React.Component {
    constructor (props) {
        super(props);
        this.buildCocktails.bind(this);
    }

    buildCocktails (drinks,selectCocktail) {
        let items = function() {
            if (drinks.items.length !== 0) {
                return drinks.items.map((item,i) => 
                    <Cocktail 
                        key={`c-${i}`} 
                        idx={`${i}`} 
                        details={item} 
                        selectCocktail={selectCocktail}
                        idxExpanded={drinks.whichExpanded} 
                    />
                );
            } else {
                return <p>no items</p>;
            }
        };
        return items();
    }

    render () {
        const { value, onSubmit, drinks, selectCocktail } = this.props;
        const cocktails = this.buildCocktails(drinks, selectCocktail);
        return (
        <div>
            <form 
                onSubmit={e => { e.preventDefault(); onSubmit(this.refs.drinkInput.value);} }
                >
                <input ref="drinkInput" type="text"></input>
            </form>
            <div className="cocktails">
                {cocktails}
            </div>
        </div>
        )

    }
}

export default CocktailUI;