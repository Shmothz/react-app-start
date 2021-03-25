import {profileAPI} from '../api/api';

const ADD_POST = 'ADD-POST'
const GET_PROFILE = 'GET_PROFILE'
const IS_FETCHING = 'IS_FETCHING'

let initialState = {
    posts : [
        {id:1,post:'Hello world!',likesCount:4},
        {id:2,post:'How are you?',likesCount:13},
        {id:3,post:'This is first comment!',likesCount:77}
    ],
    newPostText : '',
    profile: null,
    isFetching: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length,
                post: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case GET_PROFILE:
            return {
                ...state, profile: action.profile
            }
        case IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const setProfile = (profileData) => ({type: GET_PROFILE, profile: profileData})
export const toggleIsFetching = (isFetching) => ({type: IS_FETCHING, isFetching})
export const addNewPost = (newPostText) => ({type: ADD_POST, newPostText})

export const getUserDataTC = (userId) => (dispatch) => {
    profileAPI.getUserData(userId)
      .then(res => {
          dispatch(setProfile(res.data))
      })
}

export default profileReducer