import {
    FETCH_LIST_LOADING,
    FETCH_LIST_SUCCESS,
    FETCH_LIST_FAILED
} from '../actions';

const initialState = {
    list: [],
    error: null,
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_LIST_LOADING:
            return {
                ...state,
                isFetching: true,
                error: null
            };

        case FETCH_LIST_SUCCESS:
            return {
                ...state,
                list: action.payload,
                isFetching: false,
                error: null
            };

        case FETCH_LIST_FAILED:
            return {
                ...state,
                list: [],
                isFetching: false,
                error: action.payload
            };
        default:
            return state;
    }
}

export default reducer