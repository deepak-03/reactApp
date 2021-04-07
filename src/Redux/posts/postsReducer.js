import {FETCH_POSTSDATA_REQUEST,
    FETCH_POSTSDATA_SUCCESS,
    FETCH_POSTSDATA_FAILURE,
    FETCH_IGTVDATA_SUCCESS,
    FETCH_IGTVDATA_REQUEST,
    FETCH_IGTVDATA_FAILURE,
    CHANGE_CURRENT_TAB
    } from './postsTypes'

const init = {
    postsLoading: false,
    postsData: [],
    postsError: null,
    igtvLoading: false,
    igtvData: [],
    igtvError: null,
    currentTab: "imageLink" 
}

const postsReducer = (state = init, action) => {
    switch(action.type){
        case FETCH_POSTSDATA_REQUEST:
            return {
                ...state,
                postsLoading: true
            }
        case FETCH_POSTSDATA_SUCCESS:
            return{
             ...state,
             postsLoading: false, 
             postsData: action.payload,
             postsError:null
            }
        case FETCH_POSTSDATA_FAILURE:
            return {
                ...state,
                loading: false,
                postsData: [],
                postsError: action.payload
            }
        case FETCH_IGTVDATA_REQUEST:
        return {
            ...state,
            igtvLoading: true
        }
        case FETCH_IGTVDATA_SUCCESS:
            return{
            ...state,
            igtvLoading: false,
            igtvError:null,
            igtvData: action.payload
            }
        case FETCH_IGTVDATA_FAILURE:
        return {
            ...state,
            loading: false,
            igtvData: [],
            igtvError: action.payload
        }
        case CHANGE_CURRENT_TAB:
            return {
                ...state,
                currentTab: action.payload,
            }
        // case TOGGLE_LIKE:
        //     return{
        //         ...state,
        //         postsData: {
        //             ...state.postsData,
        //             ifLiked: !state.postsData.ifLiked,
        //             likes:  state.postsData.ifLiked ? (state.postsData.likes-1) : (state.postsData.likes+1)
        //         }
        //     }
         default: return state   
    }
}

export default postsReducer;