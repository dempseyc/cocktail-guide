import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/App.css';
import CocktailUI from '../components/CocktailUI';
import { fetchDrinks, expandDrink } from '../actions/drinksActions';


class App extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleSubmit (newQuery) {
    console.log(newQuery);
    this.props.dispatch(fetchDrinks(newQuery));
  }

  handleClick (drinkSelected) {
    this.props.dispatch(expandDrink(drinkSelected))
  }

  render () {
    // console.log(this.props);
    const { drinksFromAPI, stringQueried } = this.props;
    return (
      <div className="App">
        <CocktailUI 
          value={stringQueried} 
          onSubmit={this.handleSubmit} 
          selectCocktail={this.handleClick}
          drinks={drinksFromAPI}/>
      </div>

    );
  }
}

const mapStateToProps = state => ({
 ...state
});

export default connect(mapStateToProps)(App);
