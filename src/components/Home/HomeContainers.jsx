import {addPostActionCreator, updateNewPostTextActionCreator} from "../../redux/home-reducer";
import Home from "./Home";
import {connect} from "react-redux";

const mapStateToProps =(state) => {
    return {
        mail: state.homePage.mail,
        newPostText: state.homePage.newPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text)
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const HomeContainers = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainers;