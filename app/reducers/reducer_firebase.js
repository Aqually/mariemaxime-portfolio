import { FETCH_IMAGE "../actions/index";

export default function(state = [{}], action){
    switch(action.type){
        case FETCH_IMAGE:
            return [...{action.payload}];
    }
    return state;
}
