const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const GET_USERS = 'GET_USERS'

let initialState = {
    items: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                items:  state.items.map( i => {
                    if (i.id === action.userId) {
                        return { ...i, followed: true }
                    }
                    return i
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                items:  state.items.map( i => {
                    if (i.id === action.userId) {
                        return { ...i, followed: false }
                    }
                    return i
                })
            }
        case GET_USERS:
            return {
                ...state,
                items: [
                    ...state.items,
                    ...action.items
                ]
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const getUsersAC = (items) => ({type: GET_USERS, items})


export default usersReducer