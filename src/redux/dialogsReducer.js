const SEND_MESSAGE = 'SEND-MESSAGE'
const UPGRADE_MESSAGE_TEXT = 'UPGRADE-MESSAGE-TEXT'

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''
            return state
        case UPGRADE_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE})
export const upgradeMessageTextActionCreator = (text) => ({
    type: UPGRADE_MESSAGE_TEXT,
    newText: text
})

export default dialogsReducer