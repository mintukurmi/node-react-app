import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="brand-name">
                <p>Board of doctors</p>
            </div>
            <div className="login">
                <i className="fa fa-user-o"></i>
                Login <i className="fa fa-angle-down"></i>
            </div>
        </nav>
    );
};

export default Navbar;
