import React from "react";
import './StoriesWIndow.css';
import {mockStories} from "../../assets/constants";

class StoriesWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            storiesList: mockStories, currentStoryIndex: 0,
        }
    }

    prevStory() {
        const currentIndex = this.state.currentStoryIndex;
        if (currentIndex === 0) {
            return this.props.closeStories();
        }
        return this.setState({
            currentStoryIndex: currentIndex - 1,
        });
    }

    nextStory() {
        const currentIndex = this.state.currentStoryIndex;
        const storiesCount = this.state.storiesList.length;
        if (currentIndex === storiesCount - 1) {
            return this.props.closeStories();
        }
        return this.setState({
            currentStoryIndex: currentIndex + 1,
        });
    }

    renderStory(story) {
        const imagePath = story.img;
        return (<img className="stories__image" src={imagePath} alt="story"/>)
    }

    render() {
        const stories = this.state.storiesList;
        const index = this.state.currentStoryIndex;
        const currentStory = stories[index];
        const isOpen = this.props.isOpen;
        if (!isOpen) {
            return;
        }
        return (<section className='stories'>
                <div className="stories__container">
                    <button
                        className="stories__btn stories__btn-prev"
                        onClick={() => this.prevStory()}
                    ></button>
                    {this.renderStory(currentStory)}
                    <button
                        className="stories__btn stories__btn-next"
                        onClick={() => this.nextStory()}
                    ></button>
                    <button
                        className="stories__btn stories__btn-exit"
                        onClick={() => this.props.closeStories()}
                    ></button>
                </div>
            </section>)
    }
}

export default StoriesWindow;