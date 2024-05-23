import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import currentCountReducer from "./currentCountReducer";
import tableReducer from './tableReducer';

const reducers = combineReducers({
    users: usersReducer,
    currentCount: currentCountReducer,
    table: tableReducer

})

export default reducers