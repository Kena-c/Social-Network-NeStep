import React from "react";
import c from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
            <div className={c.app_wrapper}>
                <div>NeStep</div>
                <nav className={c.head_center}>
                    <NavLink to="/home" className={navData => navData.isActive ? c.active : c.item}>Home</NavLink>
                    <NavLink to="/friends" className={navData => navData.isActive ? c.active : c.item}>Friends</NavLink>
                    <NavLink to="/watch" className={navData => navData.isActive ? c.active : c.item}>Watch</NavLink>
                    <NavLink to="/marketplace" className={navData => navData.isActive ? c.active : c.item}>Marketplace</NavLink>
                </nav>
                <div className={c.head_right}>
                    <NavLink to="/menu" className={navData => navData.isActive ? c.active : c.item}>Menu</NavLink>
                    <NavLink to="/messenger" className={navData => navData.isActive ? c.active : c.item}>Messenger</NavLink>
                    <NavLink to="/notifications" className={navData => navData.isActive ? c.active : c.item}>Notifications</NavLink>
                    <NavLink to="/account" className={navData => navData.isActive ? c.active : c.item}>Account</NavLink>
                </div>
            </div>
            )
            }

            export default Header;