import { combineReducers } from 'redux';
import PortFolioReducer from "./reducer_portfolio";

const rootReducer = combineReducers({
  portfolio: PortFolioReducer
});

export default rootReducer;
