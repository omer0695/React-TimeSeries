import React from 'react';
//import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom";

export default class Menu extends React.Component {

    render() {
        return (
            <div className="topMenu">
                <p><NavLink activeClassName='is-active' to="/table">Table</NavLink></p>
                <p><NavLink activeClassName='is-active' to='/chart'>Chart</NavLink></p>
            </div>
        );
    }

}
