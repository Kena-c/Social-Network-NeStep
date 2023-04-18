import React from "react";
import FriendsItem from "./FriendsItem/FriendsItem";
import Messages from "./Messages/Messages";
import c from './Friends.module.css'

const Friends = (props) => {

    let state = props.friendsPage;
    let friendsElements = state.friends.map( f => <FriendsItem name={f.name} id={f.id}/>);
    let messagesElements = state.messages.map( m => <Messages message={m.message} id={m.id} likeCount={m.likeCount}/>);
    let newMessageText = state.newMessageText;
    let addMessage = () => {
        props.addMessage();
    }
    let onMessageChange = (e) => {
        let newMessage = e.target.value;
        props.updateNewMessageText(newMessage);
    }

    return (
        <div className={c.friends}>
            <div>
                {friendsElements}
            </div>
            <div>
                <textarea onChange={onMessageChange}
                value={newMessageText}></textarea>
                <button className={c.button_1}
                        onClick={addMessage}>Send</button>
                {messagesElements}
            </div>
        </div>
    )
}

export default Friends;