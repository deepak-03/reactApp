import {FETCH_POSTSDATA_REQUEST,
    FETCH_POSTSDATA_SUCCESS, 
    FETCH_IGTVDATA_SUCCESS,
    FETCH_IGTVDATA_FAILURE,
    CHANGE_CURRENT_TAB,
    FETCH_IGTVDATA_REQUEST,
    FETCH_POSTSDATA_FAILURE} from './postsTypes'

const fetchPostsDataRequest = ()=>{
    return{
    type: FETCH_POSTSDATA_REQUEST
    }
}

const fetchPostsDataSuccess = postsData => {
    return{
        type: FETCH_POSTSDATA_SUCCESS,
        payload: postsData
    }
}

const fetchPostsDataFailure = error => {
    return{
        type: FETCH_POSTSDATA_FAILURE,
        payload: error
    }
}

const fetchIgtvDataRequest = ()=>{
    return{
    type: FETCH_IGTVDATA_REQUEST
    }
}

const fetchIgtvDataSuccess = igtvData => {
    return{
        type: FETCH_IGTVDATA_SUCCESS,
        payload: igtvData
    }
}

const fetchIgtvDataFailure = error => {
    return{
        type: FETCH_IGTVDATA_FAILURE,
        payload: error
    }
}


export const changeCurrentTab = event =>{
    return{
        type: CHANGE_CURRENT_TAB,
        payload: event.target.parentElement.id
    }
}

export const fetchPostsData = () => {
    return (dispatch) => {
        dispatch(fetchPostsDataRequest())
        fetch("./../Data.json")
            .then(response => response.json())
            .then(data=>{
                const postsData = data.postsData
                dispatch(fetchPostsDataSuccess(postsData))
            })
            .catch(error => {
                dispatch(fetchPostsDataFailure(error.message))
            })
    }
}

export const fetchIgtvData = () => {
    return (dispatch) => {
        dispatch(fetchIgtvDataRequest())
        fetch("./../Data.json")
            .then(response => response.json())
            .then(data=>{
                const igtvData = data.igtvData
                dispatch(fetchIgtvDataSuccess(igtvData))
            })
            .catch(error => {
                dispatch(fetchIgtvDataFailure(error.message))
            })
    }
}
