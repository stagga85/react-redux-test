import { combineReducers } from 'redux';

import user from "./userReducer"
import navigation from "./navigationReducer";

export default combineReducers({
    user,
    navigation
});