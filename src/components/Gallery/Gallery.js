import React from "react";
import Card from "../Card/Card";
import './Gallery.css';

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='gallery'>
                <ul className='gallery__list'>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </ul>
            </section>
        )
    }
}

export default Gallery;