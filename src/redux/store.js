import dialogsReducer from './dialogs-reducer'
import profileReducer from './profile-reducer';
import navReducer from './nav-reducer'

let store = {
     _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts : [
                {id:1,post:'Hello world!',likesCount:4},
                {id:2,post:'How are you?',likesCount:13},
                {id:3,post:'This is first comment!',likesCount:77}
            ],
            newPostText : ''
        },
        navPage: {
            friends: [
                {id:1,avatar:'https://i.pinimg.com/originals/04/3a/0d/043a0d88931ce037b081f1606ccbda09.jpg',name:'Oleg'},
                {id:2,avatar:'https://squarefaction.ru/files/game/3841/gallery/20151231204158_1cbfa9c8.jpg',name:'Sergei'},
                {id:3,avatar:'https://i.pinimg.com/originals/9d/32/4c/9d324cd49c8880d506f0464d155ff97e.jpg',name:'Melissa'},
                {id:4,avatar:'https://vignette.wikia.nocookie.net/nevendaar/images/7/7b/DwarvesKing.jpg/revision/latest?cb=20160124163912&path-prefix=ru',name:'Anatoliy'}
            ]
        }
    },
    getStore() {
         return this._state
    },
    renderPage ()  {},
    subscribe  (observer)  {
        this.renderPage = observer
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.navPage = navReducer(this._state.navPage, action)
        this.renderPage(this._state)
    }
}

export default store