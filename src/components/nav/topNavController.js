import React from 'react';
import { Link } from 'react-router-dom';

class TopNav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark top-nav">
                <Link className="navbar-brand" to='/'><i className="fas fa-home"></i>Home</Link>
                <a className="navbar-brand" href="/register"><i className="fas fa-user-plus"></i>Register</a>
            </nav>
        )
    }
}

export default TopNav;