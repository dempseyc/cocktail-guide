import React from "react";
// import { connect } from 'react-redux';
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
        const { onSubmit, drinks, selectCocktail } = this.props;
        const cocktails = this.buildCocktails(drinks, selectCocktail);
        return (
        <div className="cocktail-ui-container">
            <header className="header">
                <h1>Cocktail Guide</h1>
                <div className="error">{drinks.message}</div>
                <form 
                    className="search-cocktails"
                    onSubmit={e => { e.preventDefault(); onSubmit(this.refs.drinkInput.value);} }
                    >
                    <label>Search Cocktails: </label>
                    <input ref="drinkInput" type="text"></input>
                    <i></i>
                </form>
            </header>
            <div className="cocktails">
                {cocktails}
            </div>
        </div>
        )

    }
}

export default CocktailUI;