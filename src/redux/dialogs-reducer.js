const SEND_MESSAGE = 'SEND-MESSAGE'

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
    ]
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: state.messages.length,
                message: action.textNewMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ''
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (textNewMessage) => ({type: SEND_MESSAGE, textNewMessage})


export default dialogsReducer