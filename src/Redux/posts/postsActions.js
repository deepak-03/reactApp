import {FETCH_POSTSDATA_REQUEST,
    FETCH_POSTSDATA_SUCCESS,
    FETCH_POSTSDATA_FAILURE,TOGGLE_LIKE} from './postsTypes'

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

export const toggleIfLiked = () =>{
    return{
        type: TOGGLE_LIKE,
    }
}