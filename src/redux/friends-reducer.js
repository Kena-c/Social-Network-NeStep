const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
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
    ],
    newMessageText: ''
}

const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.body
            }
        case ADD_MESSAGE:
            let newMessage = state.newMessageText
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, {id: 5, message: newMessage}]
            }
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, body: body});

export default friendsReducer;