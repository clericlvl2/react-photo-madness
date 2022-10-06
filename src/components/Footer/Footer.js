import React from "react";
import './Footer.css';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='footer'>
                <p className='footer__author'>Artem&nbsp;Budarnykh&nbsp;&copy;&nbsp;2022</p>
            </section>
        )
    }
}

export default Footer;