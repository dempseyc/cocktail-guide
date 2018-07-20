export const RECEIVE_DRINKS = 'RECEIVE_DRINKS';
export const REQUEST_DRINKS = 'REQUEST_DRINKS';
export const EXPAND_DRINK = 'EXPAND_DRINK';

function receiveDrinks(query, json) {
    return {
        type: RECEIVE_DRINKS,
        query,
        drinks: json.drinks.map(item => buildDrink(item) ) 
    }
}

function buildDrink(i) {
    let processIngredients = () => {
        let arr = [];
        for (let n=1;n<16;n++) {
            if (i[`strIngredient${n}`].length > 0) {
                let obj = { 
                    ingredient: i[`strIngredient${n}`],
                    measure: i[`strMeasure${n}`]
                };
                arr.push(obj);
            } else {
                break;
            }
        }
        return arr;
    }
    const drink = { 
        name: i.strDrink,
        glass: i.strGlass,
        ingredients: processIngredients(),
        instructions: i.strInstructions,
        image: i.strDrinkThumb
    }
    return drink;
}

function requestDrinks(query) {
    return {
        type: REQUEST_DRINKS,
        query
    }
}

export function fetchDrinks(query) {
    const uri = `/api/drinks/${query}`;
    return dispatch => {
        dispatch(requestDrinks(query))
        return fetch(uri)
        .then(response => response.json())
        // need receive drinks success, error, etc
        .then(json => dispatch(receiveDrinks(query, json)))
    }
}

export function expandDrink(drinkIdx) {
    return {
        type: EXPAND_DRINK,
        drinkIdx
    }
}
