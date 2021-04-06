import {FETCH_PROFILEDATA_REQUEST,
    FETCH_PROFILEDATA_SUCCESS,
    FETCH_PROFILEDATA_FAILURE,
    TOGGLE_FOLLOW} from './profileTypes'

const init = {
    loading: false,
    profileData: {},
    error: ''
}

const profileReducer = (state = init, action) => {
    switch(action.type){
        case FETCH_PROFILEDATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_PROFILEDATA_SUCCESS:
            return{
             loading: false, 
             profileData: action.payload,
             error:""
            }
        case FETCH_PROFILEDATA_FAILURE:
            return{
              loading:false,
              profileData:[],
              error:action.payload 
            }
        case TOGGLE_FOLLOW:
            return{
                ...state,
                profileData: {
                    ...state.profileData,
                    ifFollowed: !state.profileData.ifFollowed,
                    followers:  state.profileData.ifFollowed ? (state.profileData.followers-1) : (state.profileData.followers+1)
                }
            }
         default: return state   
    }
}

export default profileReducer;