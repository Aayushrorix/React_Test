import { combineReducers } from "redux";
import cartReducer from './cartReducer'
import itemsReducer from './itemsReducer';

const reducers = combineReducers({
    cart : cartReducer,
    items: itemsReducer
})

export default reducers
