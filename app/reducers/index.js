import { combineReducers } from 'redux';
import PortFolioReducer from "./reducer_portfolio";
import SendEmailReducer from "./reducer_email";

const rootReducer = combineReducers({
    portfolio: PortFolioReducer
});

export default rootReducer;
