import Ayush from './ayush_pic.jpg'
import React from 'react'
import './Chats.css'
import Chat from './Chat'
function Chats() {
    return (
        <div className="chats">
         
            <Chat 
            name="Hannah Mckay"
            message="How are you ?"
            timestamp="40 seconds ago"
            profilePic="https://www.gstatic.com/tv/thumb/persons/505244/505244_v9_bb.jpg"
            />
        </div>
    )
}

export default Chats
