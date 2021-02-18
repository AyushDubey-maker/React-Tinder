import React from 'react'
import Ayush from './ayush_pic.jpg'
import './Profile.css'
function Profile() {
    return (
        <>
        {/* <h1 className="profile_tag">Profile</h1> */}
        <div className="card_user"
                style={{backgroundImage:`url(${Ayush})`}}>
                    <h3>Ayush Dubey</h3>
                </div>
                <div className="user_bio">
                  
                    <h3>Location: Mumbai,India</h3>
                    <p>2nd Year BE Student in Information Technology from Mumbai University.
                    I love building new projects and learn about new technologies.
                     Building Projects help me get hand on experience about
                    how different applications that we use in our daily life are built.
                    </p>

                </div>
    </>
    )
}

export default Profile
