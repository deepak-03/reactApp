import {FETCH_PROFILEDATA_REQUEST,
    FETCH_PROFILEDATA_SUCCESS,
    FETCH_PROFILEDATA_FAILURE,TOGGLE_FOLLOW} from './profileTypes'

const fetchProfileDataRequest = ()=>{
    return{
    type: FETCH_PROFILEDATA_REQUEST
    }
}

const fetchProfileDataSuccess = profileData => {
    return{
        type: FETCH_PROFILEDATA_SUCCESS,
        payload: profileData
    }
}

const fetchProfileDataFailure = error => {
    return{
        type: FETCH_PROFILEDATA_FAILURE,
        payload: error
    }
}

export const fetchProfileData = () => {
    return (dispatch) => {
        dispatch(fetchProfileDataRequest())
        fetch("./../Data.json")
            .then(response => response.json())
            .then(data=>{
                const profileData = data.profileData
                dispatch(fetchProfileDataSuccess(profileData))
            })
            .catch(error => {
                dispatch(fetchProfileDataFailure(error.message))
            })
    }
}

export const toggleIfFollowed = () =>{
    return{
        type: TOGGLE_FOLLOW,
    }
}
