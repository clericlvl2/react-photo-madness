import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './images/logo.png';
import userPic from './images/monkey.jpg';
import mockCardImage from './images/kick-scooter.jpg';
import { mockStories } from "./constants";


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className='header'>
                <img className='header__logo' src={logo} alt="logo"/>
            </section>
        )
    }
}

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStoriesOpen: false,
        }

    }
    toggleStories() {
        const currentState = this.state.isStoriesOpen;
        this.setState({
            isStoriesOpen: !currentState,
        });
    }
    render() {
        return (
            <section className='profile'>
                    <img className='profile__pic'
                         src={userPic}
                         alt="user-picture"
                         onClick={() => this.toggleStories()}
                    />
                    <h2 className='profile__username'>Mr. Stranger</h2>
            </section>
        )
    }
}

class StoriesWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStoriesOpen: props.isOpen,
        }

    }
    prevStory() {
        return;
    }
    nextStory() {
        return;
    }
    renderStory() {
        return (
            <img className="stories__story" src="." alt=""/>
        )
    }
    render() {
        console.log(this.state.isStoriesOpen);

        // if (!this.state.isStoriesOpen) {
        //     return;
        // }
        // const currentStory = this.renderStory();
        return (
            <section className='stories'>
                <div className="stories__container">
                    {/*<button*/}
                    {/*    className="stories__btn-prev"*/}
                    {/*    onClick={() => this.prevStory()}*/}
                    {/*></button>*/}
                    {/*{currentStory}*/}
                    {/*<button*/}
                    {/*    className="stories__btn-next"*/}
                    {/*    onClick={() => this.nextStory()}*/}
                    {/*></button>*/}
                </div>
            </section>
        )
    }
}

class Card extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li className='card gallery__item'>
                <img className='card__pic' src={mockCardImage} alt="gallery-pic"/>
                <h3 className='card__title'>Title</h3>
                <p className='card__desc'>Description.</p>
            </li>
        )
    }
}

class Gallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className='gallery'>
                <ul className='gallery__list'>
                    <Card />
                    <Card />
                    <Card />
                </ul>
            </section>
        )
    }
}




class Main extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
                <Profile />
                <Gallery />
            </main>
        )
    }
}

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <section className='footer'>
                <p className='footer__author'>Artem&nbsp;Budarnykh&nbsp;&copy;2022</p>
            </section>
        )
    }
}


class PhotoApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header />
                <Main />
                <Footer />
                <StoriesWindow
                    isOpen={this.state.isStoriesOpen}
                />
            </>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PhotoApp />);
