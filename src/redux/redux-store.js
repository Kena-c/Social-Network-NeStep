import {combineReducers, createStore} from "redux";
import homeReducer from "./home-reducer";
import friendsReducer from "./friends-reducer";
import messengerReducer from "./messenger-reducer";
import watchReducer from "./watch-reducer";

let reducers = combineReducers({
    homePage: homeReducer,
    friendsPage: friendsReducer,
    usersPage: messengerReducer,
    watchesPage: watchReducer
})

let store = createStore(reducers)

export default store;