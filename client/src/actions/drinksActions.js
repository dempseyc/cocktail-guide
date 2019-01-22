export const RECEIVE_DRINKS = 'RECEIVE_DRINKS';
export const REQUEST_DRINKS = 'REQUEST_DRINKS';
export const EXPAND_DRINK = 'EXPAND_DRINK';
export const FETCH_DRINKS_FAILURE = 'FETCH_DRINKS_FAILURE';

function receiveDrinks(query, json) {
    return {
        type: RECEIVE_DRINKS,
        message: '',
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
        .then(handleErrors)
        .then(response => response.json())
        .then(json => {
            dispatch(receiveDrinks(query, json));
        })
        .catch(error => dispatch(fetchDrinksFailure(query, error)))
    }
}

const fetchDrinksFailure = (query, error) => ({
  type: FETCH_DRINKS_FAILURE,
  payload: { error },
  message: `no match for "${query}"`,
  query
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export function expandDrink(drinkIdx) {
    return {
        type: EXPAND_DRINK,
        drinkIdx
    }
}
