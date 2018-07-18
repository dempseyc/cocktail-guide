import { combineReducers } from 'redux'
import {
    REQUEST_DRINKS,
    RECEIVE_DRINKS,
    EXPAND_DRINK 
} from '../actions/drinksActions';


function stringQueried(state = '', action) {
    switch (action.type) {
        case REQUEST_DRINKS:
            return action.query
        default:
        return state
    }
}

const drinksInitState = {
    isFetching: false,
    items: []
}

function drinksFromAPI(state = drinksInitState, action) {
    switch (action.type) {
        case REQUEST_DRINKS:
            return Object.assign({}, state, {
            isFetching: true,
            });
        case RECEIVE_DRINKS:
            return Object.assign({}, state, {
            isFetching: false,
            items: action.drinks
            });
        case EXPAND_DRINK:
            return Object.assign({}, state, {
            whichExpanded: action.drinkIdx
            });
        default:
        return state;
    }
}

const rootReducer = combineReducers({
    stringQueried,
    drinksFromAPI
})

export default rootReducer