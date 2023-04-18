import React from "react";
import c from './Home.module.css'
import Sidebar from "./Sidebar/Sidebar";
import Posts from "./Posts/Posts";

const Home = (props) => {

    let postElements = props.mail.map(p => <Posts messages={p.message} likeCount={p.likeCount}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };

    return (
        <div className={c.home_posts}>
            <div><Sidebar/></div>
            <div className={c.my_posts}><h3>My Posts</h3>
                <textarea onChange={onPostChange}
                          ref={newPostElement}
                          placeholder='Enter your message'
                          value={props.newPostText}></textarea>
                <button onClick={addPost}>Add Post</button>
                {postElements}</div>
        </div>
    )
}

export default Home;