import React from "react";
import c from "./Sidebar.module.css"

const Sidebar = () => {
    return (
        <div className={c.sidebar}>
            <div className={c.sidebar_1}>K-net</div>
            <div className={c.sidebar_1}>Find friends</div>
            <div className={c.sidebar_1}>Most Recent</div>
            <div className={c.sidebar_1}>Groups</div>
            <div className={c.sidebar_1}>Marketplace</div>
            <div className={c.sidebar_1}>Watch</div>
            <div className={c.sidebar_1}>Memories</div>
            <div className={c.sidebar_1}>Saved</div>
            <div className={c.sidebar_1}>Pages</div>
            <div className={c.sidebar_1}>Events</div>
            <div className={c.sidebar_1}>See more</div>
        </div>
    )
}

export default Sidebar;