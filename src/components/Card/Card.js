import React from "react";
import './Card.css';
import mockCardImage from "../../assets/images/kick-scooter.jpg";

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className='gallery__item card'>
                <img className='card__pic' src={mockCardImage} alt="gallery-pic"/>
                <h3 className='card__title'>Title</h3>
                <p className='card__desc'>Description.</p>
            </li>
        )
    }
}

export default Card;