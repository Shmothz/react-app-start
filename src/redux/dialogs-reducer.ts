const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

type DialogType = {
    id: number
    username: string
}
type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs : [
        {id:1,username:'Mikhail'},
        {id:2,username:'Viktoria'},
        {id:3,username:'Natasha'}
    ] as Array<DialogType>,
    messages : [
        {id:0,message:'Hello'},
        {id:1,message:'Im fine and you?'},
        {id:2,message:'We will rock you'},
        {id:3,message:'Enter sandman'},
    ] as Array<MessageType>,
    newMessageText: ''
}
type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
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
type ActionsTypes = SendMessageActionType

type SendMessageActionType = {
    type: typeof SEND_MESSAGE
    textNewMessage: string
}
export const sendMessageActionCreator = (textNewMessage: string) => ({type: SEND_MESSAGE, textNewMessage})


export default dialogsReducer