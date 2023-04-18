import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Marketplace from "./components/Marketplace/Marketplace";
import {Route, Routes} from "react-router-dom";
import Notifications from "./components/HeaderRight/Notifications/Notifications";
import Account from "./components/HeaderRight/Account/Account";
import Menu from "./components/HeaderRight/Menu/Menu";
import FriendsContainer from "./components/Friends/FriendsContainer";
import HomeContainers from "./components/Home/HomeContainers";
import MessengerContainer from "./components/HeaderRight/Messenger/MessengerContainer";
import WatchContainer from "./components/Watch/WatchContainer";

function App() {


    return (
        <div>
            <div className="app">
                <Header/>
                <div className='app_c'>
                    <Routes>
                        <Route path='/home' element={<HomeContainers/>}/>
                        <Route path='/friends/*' element={<FriendsContainer/>}/>
                        <Route path='/watch' element={<WatchContainer/>}/>
                        <Route path='/marketplace' element={<Marketplace/>}/>
                        <Route path='/menu' element={<Menu/>}/>
                        <Route path='/messenger' element={<MessengerContainer/>}/>
                        <Route path='/notifications' element={<Notifications/>}/>
                        <Route path='/account' element={<Account/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    )
        ;
}

export default App;
