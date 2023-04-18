const ADD_POST ='ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    mail: [
        {id: 1, message: 'hi, good luck, evrything will good', likeCount: '12'},
        {id: 2, message: 'hi, good luck, evrything will good', likeCount: '12'},
        {id: 3, message: 'hi, good luck, evrything will good', likeCount: '12'},
        {id: 4, message: 'hi, good luck, evrything will good', likeCount: '12'},
        {id: 5, message: 'hi, good luck, evrything will good', likeCount: '12'}
    ],
    newPostText: 'it-kamasutra'
}

const homeReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {id: 5, message: state.newPostText, likesCount: 12};
            return  {
                ...state,
                mail: [...state.mail, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default homeReducer;