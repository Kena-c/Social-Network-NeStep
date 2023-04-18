import homeReducer from "./home-reducer";
import friendsReducer from "./friends-reducer";

let store = {
    _state: {
        homePage: {
            mail: [
                {id: 1, message: 'hi, good luck, evrything will good', likeCount: '12'},
                {id: 2, message: 'hi, good luck, evrything will good', likeCount: '12'},
                {id: 3, message: 'hi, good luck, evrything will good', likeCount: '12'},
                {id: 4, message: 'hi, good luck, evrything will good', likeCount: '12'},
                {id: 5, message: 'hi, good luck, evrything will good', likeCount: '12'}
            ],
            newPostText: 'it-kamasutra'
        },

        friendsPage: {
            friends: [
                {id: 0, name: 'Ansagan'},
                {id: 1, name: 'Bahon'},
                {id: 2, name: 'Mustik'},
                {id: 3, name: 'Mustik'},
                {id: 4, name: 'Nurai'}
            ],

            messages: [
                {id: 0, message: 'Hi, How are you?', likeCount: '12'},
                {id: 1, message: 'It is my first post', likeCount: '12'},
                {id: 2, message: 'It is my first post', likeCount: '12'},
                {id: 3, message: 'It is my first post', likeCount: '12'},
                {id: 4, message: 'It is my first post', likeCount: '12'}
            ], newMessageText: ''
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('change');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.homePage = homeReducer(this._state.homePage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
