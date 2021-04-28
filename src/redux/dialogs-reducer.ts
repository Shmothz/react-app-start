import {ThunkAction} from "redux-thunk";
import {ActiveStateType} from "./redux-store";
import {AnyAction} from "redux";

const SEND_MESSAGE = 'dialogs/SEND-MESSAGE'

export type DialogType = {
    id: number
    username: string
}
export type MessageType = {
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
        {id:1,message:'Hello'},
        {id:2,message:'Im fine and you?'},
        {id:3,message:'We will rock you'},
        {id:4,message:'Enter sandman'},
    ] as Array<MessageType>
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
                messages: [...state.messages, newMessage]
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
const sendMessageAC = (textNewMessage: string) => ({type: SEND_MESSAGE, textNewMessage})

export const sendMessageTC = (newMessageText: string): ThunkAction<void, ActiveStateType, unknown, AnyAction> =>
    (dispatch) => {
    dispatch(sendMessageAC(newMessageText))
}

export default dialogsReducer