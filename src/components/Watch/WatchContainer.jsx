import Watch from "./Watch";
import {followAC, setWatchesAC, unfollowAC} from "../../redux/watch-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        watch: state.watchesPage.watch
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (watchId) => {
            dispatch(followAC(watchId))
        },
        unfollow: (watchId) => {
            dispatch(unfollowAC(watchId))
        },
        setWatches: (watches) => {
            dispatch(setWatchesAC(watches))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watch)