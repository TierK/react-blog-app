import React, { Component } from 'react';
import './LeftSideBar.css';
import { NavLink } from 'react-router-dom';

export default class LeftSideBar extends Component {
    render() {
        return (
            <div className="LeftSideBar">
               <NavLink to="/feeds">Feeds</NavLink>
               <NavLink to="/profile">Profile</NavLink>
               <NavLink to="/dialogs">Dialogs</NavLink>
               <NavLink to="/settings">Settings</NavLink>
            </div>
        )
    }
}
