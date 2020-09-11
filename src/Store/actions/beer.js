import Http from '../../hoc/Http/Http'
import {FETCH_BEER_REQUEST, FETCH_BEER_SUCCESS, FETCH_BEER_ERROR, FETCH_SEARCH_SUCCESS, FECTH_SEARCH_ERROR} from './actionTypes'

export function fetchBeers() {
    return async (dispatch, getState) => {
        const state = getState()
        dispatch(fetchBeersStart())
        try {
            let params = {}
            if(state.beers.search) {
                params.beer_name = state.beers.search
            }
            await Http.get('beers', params).then((response) => { 
                response.json().then(data => {
                    dispatch(fetchBeersSuccess(data))
                })
            })
        } catch(e) {
            dispatch(fetchBeersError(e))
        }
    }
}

export function fetchBeersStart() {
    return {
        type: FETCH_BEER_REQUEST
    }
}

export function fetchBeersSuccess(beers) {
    return {
        type: FETCH_BEER_SUCCESS,
        beers
    }
}

export function fetchBeersError(e) {
    return {
        type: FETCH_BEER_ERROR,
        error: e
    }
}

export function fetchSearch(search) {
    return dispatch => {
        dispatch(fetchSearchSuccess(search))
    }
}

export function fetchSearchSuccess(search) {
    return {
        type: FETCH_SEARCH_SUCCESS,
        search: search
    }
}

export function fetchSearchError(error) {
    return {
        type: FECTH_SEARCH_ERROR,
        error: error
    }
}