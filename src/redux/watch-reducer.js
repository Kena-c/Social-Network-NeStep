const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_WATCHES = 'SET_WATCHES';

let initialState = {
    watch: [

    ]
}

const watchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                watch: state.watch.map(w => {
                    if (w.id === action.watchId) {
                        return {...w, followed: true}
                    }
                    return w;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                watch: state.watch.map(w => {
                    if (w.id === action.watchId) {
                        return {...w, followed: false}
                    }
                    return w;
                })
            }
        case SET_WATCHES: {
            return { ...state, watch: [...state.watch, ...action.watch]            }
        }
        default:
            return state;
    }
}

export const followAC = (watchId) => ({type: FOLLOW, watchId})
export const unfollowAC = (watchId) => ({type: UNFOLLOW, watchId})
export const setWatchesAC = (watches) => ({type: SET_WATCHES, watches})

export default watchReducer;