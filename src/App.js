import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import StoriesWindow from "./components/StoriesWindow/StoriesWIndow";
import Footer from "./components/Footer/Footer";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStoriesOpen: false,
            // TODO stories checked
            // TODO stories round gradient
            // TODO card mock data loading
            // TODO stories interval + visualisation
            // TODO add card feature
        };
    }

    openStories() {
        this.setState({
            isStoriesOpen: true,
        });
    }

    closeStories() {
        this.setState({
            isStoriesOpen: false,
        });
    }

    render() {
        return (
            <>
                <Header/>
                <Main openStories={() => this.openStories()}/>
                <Footer/>
                <StoriesWindow
                    isOpen={this.state.isStoriesOpen}
                    closeStories={() => this.closeStories()}
                />
            </>
        )
    }
}

export default App;