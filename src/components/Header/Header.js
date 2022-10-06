import React from "react";
import logo from './../../logo.jpg';
import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='header'>
                <img className='header__logo' src={logo} alt="logo"/>
                <h1 className='header__company-name'>My photo app</h1>
            </section>
        )
    }
}

export default Header;