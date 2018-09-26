import React from 'react';
import {Link, IndexLink} from 'react-router';

class Header extends React.Component {
    render() {
        return (
            <header>
                <nav>
                    <IndexLink activeClassName="selected" to="/" className="btn">Home</IndexLink>
                    <Link activeClassName="selected" to="about" className="btn">About</Link>
                    <Link activeClassName="selected" to="tasks" className="btn">Tasks</Link>
                </nav>
            </header>
        );
    }
}

export default Header;