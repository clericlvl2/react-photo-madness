import React from "react";
import Profile from "../Profile/Profile";
import Gallery from "../Gallery/Gallery";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <Profile
                    openStories={this.props.openStories}/>
                <Gallery/>
            </main>)
    }
}

export default Main;