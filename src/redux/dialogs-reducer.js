const SEND_MESSAGE = 'SEND-MESSAGE'
const UPGRADE_MESSAGE_TEXT = 'UPGRADE-MESSAGE-TEXT'

let initialState = {
    dialogs : [
        {id:1,username:'Mikhail'},
        {id:2,username:'Viktoria'},
        {id:3,username:'Natasha'}
    ],
    messages : [
        {id:0,message:'Hello'},
        {id:1,message:'Im fine and you?'},
        {id:2,message:'We will rock you'},
        {id:3,message:'Enter sandman'},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                message: state.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        case UPGRADE_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            }
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