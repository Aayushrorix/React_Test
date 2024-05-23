import { combineReducers } from "redux";
import currentCountReducer from "./currentCountReducer";
import tableReducer from './tableReducer';

const reducers = combineReducers({
    currentCount: currentCountReducer,
    table: tableReducer

})

export default reducers