import {combineReducers} from 'redux'
import beerReducer from './beer'
import searchReducer from './beer'

export default combineReducers({
    beers: beerReducer,
    search: searchReducer
})