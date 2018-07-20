import React from "react";
import "../styles/Cocktail.css"

class Cocktail extends React.Component {
    constructor (props) {
        super(props);
        this.expand = this.expand.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.buildDetails();
        this.classNames = ['cocktail'];
        this.detailClassNames = ['details', 'anim-collapse'];
    }

    buildDetails () {
        const { details } = this.props;
        let glass = () => (<p className="glass">glass: {details.glass}</p>)
        let ingredients = () => {
            return (
            <ul>
            {details.ingredients.map((i,idx) => {
                return (
                <li key={idx}>{i.ingredient}, {i.measure}</li>
                )
            })}
            </ul>
            )
        };
        let imageStyle = {
            backgroundImage: `url(${details.image})`,
        }
        this.details = () => (
            <div key={`dt-${this.props.idx}`} className={this.detailClassNames.join(' ')}>
                <div className="ingredients">
                    {ingredients()}
                    {glass()}
                </div>
                <div className="image" style={imageStyle}></div>
                <div className="instructions">{details.instructions}</div>
            </div>
        );
    }

    expand () {
        this.expanded = true;
        this.detailClassNames = ['details', 'anim-expand'];
    }

    collapse () {
        this.expanded = false;
        this.detailClassNames = ['details', 'anim-collapse'];
    }

    handleClick () {
        this.props.selectCocktail(this.props.idx);
        // this.expand();
    }

    render () {
        this.buildDetails();
        if (this.props.idxExpanded === this.props.idx) {
            this.expand();
        } else {
            this.collapse();
        }
        return (
            <div 
                key={this.props.idx} 
                onClick={this.handleClick}
                className={this.classNames.join(' ')}
            >
            <h1>{this.props.details.name}</h1>
            {this.details()}
            </div>
        )
    }
};

export default Cocktail
