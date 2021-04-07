import {FETCH_POSTSDATA_REQUEST,
    FETCH_POSTSDATA_SUCCESS,
    FETCH_POSTSDATA_FAILURE,
    TOGGLE_LIKE} from './postsTypes'

const init = {
    loading: false,
    postsData: [],
    error: ''
}

const postsReducer = (state = init, action) => {
    switch(action.type){
        case FETCH_POSTSDATA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POSTSDATA_SUCCESS:
            return{
             loading: false, 
             postsData: action.payload,
             error:""
            }
        case FETCH_POSTSDATA_FAILURE:
            return{
              loading:false,
              postsData:[],
              error:action.payload 
            }
        case TOGGLE_LIKE:
            return{
                ...state,
                postsData: {
                    ...state.postsData,
                    ifLiked: !state.postsData.ifLiked,
                    likes:  state.postsData.ifLiked ? (state.postsData.likes-1) : (state.postsData.likes+1)
                }
            }
         default: return state   
    }
}

export default postsReducer;