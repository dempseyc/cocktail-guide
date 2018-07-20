import { combineReducers } from 'redux'
import {
    REQUEST_DRINKS,
    RECEIVE_DRINKS,
    EXPAND_DRINK,
    FETCH_DRINKS_FAILURE,
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
            items: action.drinks,
            message: action.message,
            whichExpanded: -1
            });
        case EXPAND_DRINK:
            return Object.assign({}, state, {
            whichExpanded: action.drinkIdx
            });
        case FETCH_DRINKS_FAILURE:
            return Object.assign({}, state, {
            message: action.message
            })
        default:
        return state;
    }
}

const rootReducer = combineReducers({
    stringQueried,
    drinksFromAPI
})

export default rootReducer