import {profileAPI} from "../api/api";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = "profile/ADD-POST";
const GET_PROFILE = "profile/GET_PROFILE";
const IS_FETCHING = "profile/IS_FETCHING";
const SET_STATUS = "profile/SET_STATUS";
const SET_PHOTO = "profile/SET_PHOTO";

let initialState = {
    posts: [
        {id: 1, post: "Hello world!", likesCount: 4},
        {id: 2, post: "How are you?", likesCount: 13},
        {id: 3, post: "This is first comment!", likesCount: 77},
    ] as Array<PostType>,
    newPostText: '',
    profile: null as ProfileType | null,
    isFetching: false,
    status: '',
};

type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length,
                post: action.newPostText,
                likesCount: 0,
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            };
        case GET_PROFILE:
            return {
                ...state,
                profile: action.profile,
            };
        case IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status,
            };
        case SET_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType,
            };
        default:
            return state;
    }
};

type SetProfileActionType = {
    type: typeof GET_PROFILE
    profile: ProfileType
}
export const setProfile = (profileData: ProfileType): SetProfileActionType => ({
    type: GET_PROFILE,
    profile: profileData,
});

type ToggleIsFetchingActionType = {
    type: typeof IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): ToggleIsFetchingActionType => ({
    type: IS_FETCHING,
    isFetching,
});
type AddNewPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addNewPost = (newPostText: string): AddNewPostActionType => ({type: ADD_POST, newPostText});
type SetProfileStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
const setProfileStatus = (status: string): SetProfileStatusActionType => ({type: SET_STATUS, status});
type SetPhotosActionType = {
    type: typeof SET_PHOTO
    photos: PhotosType
}
const setPhotos = (file: any): SetPhotosActionType => ({type: SET_PHOTO, photos: file});

export const getUserDataTC = (userId: number) => async (dispatch: any) => {
    const res = await profileAPI.getUserData(userId)
    dispatch(setProfile(res.data));
};
export const getProfileStatus = (userId: number) => async (dispatch: any) => {
    const res = await profileAPI.getProfileStatus(userId);
    dispatch(setProfileStatus(res.data));
};
export const pushProfileStatus = (status: string) => async (dispatch: any) => {
    const res = await profileAPI.pushProfileStatus(status);
    if (res.data.resultCode === 0) {
        dispatch(setProfileStatus(status));
    }
};
export const pushNewAvatarTC = (avatar: any) => async (dispatch: any) => {
    const res = await profileAPI.pushNewAvatar(avatar);
    if (res.data.resultCode === 0) {
        dispatch(setPhotos(res.data.data.photos));
    }
};

export default profileReducer;
