import {FETCH_BEER_REQUEST, FETCH_BEER_SUCCESS, FETCH_BEER_ERROR,FETCH_SEARCH_SUCCESS, FECTH_SEARCH_ERROR} from '../actions/actionTypes'

const initialState = {
    beers: [],
    loading: false,
    error: null,
    search:''
}

export default function beerReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_BEER_REQUEST:
            return {
                ...state, loading: true
            }
        case FETCH_BEER_SUCCESS:
            return {
                ...state, loading: false, beers: action.beers
            }
        case FETCH_BEER_ERROR:
            return {
                ...state, loading: false, beers: action.error
        }
        case FETCH_SEARCH_SUCCESS:
            return {
                ...state, search: action.search
            }
        case FECTH_SEARCH_ERROR:
            return {
                ...state, payload: action.error
            }
        default:
            return state
    }
}