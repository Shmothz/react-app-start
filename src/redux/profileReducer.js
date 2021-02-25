const ADD_POST = 'ADD-POST'
const UPGRADE_POST_TEXT = 'UPGRADE-POST-TEXT'

let initialState = {
    posts : [
        {id:1,post:'Hello world!',likesCount:4},
        {id:2,post:'How are you?',likesCount:13},
        {id:3,post:'This is first comment!',likesCount:77}
    ],
        newPostText : ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length,
                post: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost)
            state.newPostText = ''
            return state
        case UPGRADE_POST_TEXT:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const upgradePostTextActionCreator = (text) => ({
    type: UPGRADE_POST_TEXT,
    newText: text
})

export default profileReducer