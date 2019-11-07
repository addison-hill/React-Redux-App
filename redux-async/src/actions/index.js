import axios from 'axios';

export const FETCH_LIST_LOADING = "FETCH_LIST_LOADING";
export const FETCH_LIST_SUCCESS = "FETCH_LIST_SUCCESS";
export const FETCH_LIST_FAILED = "FETCH_LIST_FAILED";

export const listLoading = () => ({ type: FETCH_LIST_LOADING });
export const listLoadSuccess = data => ({
    type: FETCH_LIST_SUCCESS,
    payload: data
});

export const listLoadFailure = error => ({
    type: FETCH_LIST_FAILED,
    payload: error
});

export const fetchList = () => dispatch => {
    dispatch({ type: FETCH_LIST_LOADING });
    axios
        .get('https://overwatch-api.net/api/v1/hero')
        .then(res => {
            console.log('rizzy', res.data.data)
            dispatch({ type: FETCH_LIST_SUCCESS, payload: res.data.data })
        })
        .catch(err => dispatch({ type: FETCH_LIST_FAILED, payload: err }));
};
