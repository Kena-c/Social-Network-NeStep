import React from "react";
import {NavLink} from "react-router-dom";

const FriendsItem = (props) => {

    let path = "/friends/*" + props.id

    return (
        <div>
                <div>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
        </div>
    )
}

export default FriendsItem;