import { FETCH_PORTFOLIO } from "../actions/index";
//all = array de blog posts
//post = un post individuel (null par defaut)
const INITIAL_STATE = { all:[], portfolio: null };

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case FETCH_PORTFOLIO:
            return {...state, portfolio: action.payload.data};
        default:
            return state;
    }
}
