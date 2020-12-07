import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const NavBar = () => {
    return (
            <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
            <div className="container">
            <Link to="/" className="navbar-brand">
            Contact Book
            </Link>
            <div>
                    <Link to="/contacts/add" className="btn btn-light ml-auto">Create Contact</Link>
            </div>
            </div>
            </nav>
    )
}

export default NavBar;
