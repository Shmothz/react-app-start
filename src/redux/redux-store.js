import {createStore, combineReducers} from 'redux'
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import navReducer from './navReducer';

let reducers = combineReducers ({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    navPage: navReducer
})

let store = createStore(reducers)

export default store