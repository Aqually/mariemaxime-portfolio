import { FETCH_PORTFOLIO } from "../actions/index";


export default function(state = {}, action){
    switch(action.type){
        case FETCH_PORTFOLIO:
            return action.payload;
    }
    return state;
}
