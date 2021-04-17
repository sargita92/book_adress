import { combineReducers } from 'redux';

import contacts from "./contacts";


//Combina todos os reducers em um so
export default combineReducers({
    contacts,
});