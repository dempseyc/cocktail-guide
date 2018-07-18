import React from "react";

class Cocktail extends React.Component {
    constructor (props) {
        super(props);
        this.expand = this.expand.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.buildExtras();
    }

    buildExtras () {
        const { details } = this.props;
        let ingredients = details.ingredients.map((i,idx) => (
            <p key={idx}>{i.ingredient}, {i.measure}</p>
        ))
        let arr = [ingredients, details.glass, details.instructions];
        this.extras = arr.map(detail => (
            <p>{detail}</p>
        ))
    }

    componentDidUpdate () {
        if (this.props.whichExpanded === this.props.idx) {
            this.expand();
        } else {
            this.collapse()
        }
    }

    expand () {
        this.expanded = true;
        this.showExpansion = this.extras;
    }

    collapse () {
        this.expanded = false;
        this.showExpansion = '';
    }

    handleClick () {
        this.props.selectCocktail(this.props.idx);
        this.expand();
    }

    render () {
        this.buildExtras();
        return (
            <div key={`${this.props.idx}`} onClick={this.handleClick}>
            <h1>{this.props.details.name}</h1>
            {this.showExpansion}
            </div>
        )
    }
};

export default Cocktail
