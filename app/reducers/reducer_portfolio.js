import { FETCH_PORTFOLIO } from "../actions/index";


export default function(state = {}, action){
    switch(action.type){
        case FETCH_PORTFOLIO:
            return {...state, portfolio: action.payload}
    }
    return state;
}
