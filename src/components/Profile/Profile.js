import React from "react";
import './Profile.css';
import userPic from "../../assets/images/monkey.jpg";

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className='profile'>
                <div className='profile__pic-container'>
                    <img className='profile__pic'
                         src={userPic}
                         alt="user-face"
                         onClick={() => this.props.openStories()}
                    />
                </div>
                <h2 className='profile__username'>Mr. Stranger</h2>
            </section>
        )
    }
}

export default Profile;