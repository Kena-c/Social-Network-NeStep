import React from "react";
import c from "./Posts.module.css";

const Posts = (props) => {

    return (
            <div>
                <div className={c.post}>
                    <div>
                        <img
                            src="https://sun9-north.userapi.com/sun9-87/s/v1/ig2/EDoQXJJYTwWHys5dfH5Q9W7iiNOW6RkCVVyD9oL0xIckdy7eWGMFOW1YU_XbXCr8j4JyAkUsqipNvfF5JUtlue4u.jpg?size=320x427&quality=96&type=album"
                            alt="" className={c.post_image}/>
                        {props.messages}
                    </div>
                    <div className={c.post_like}>like {props.likeCount}</div>
                </div>
            </div>
    )
}

export default Posts;