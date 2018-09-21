import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <Link to="/" className="btn">Home</Link>
                    <Link to="about" className="btn">About</Link>
                    <Link to="tasks" className="btn">Tasks</Link>
                </nav>
            </header>
        );
    }
}

export default Header;