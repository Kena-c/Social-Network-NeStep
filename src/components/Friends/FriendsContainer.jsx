import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/friends-reducer";
import Friends from "./Friends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        friendsPage: state.friendsPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        updateNewMessageText: (newMessage) => {
            dispatch(updateNewMessageTextActionCreator(newMessage));
        }
    }
}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer;
