import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import Ayush from './ayush_pic.jpg'
import './ChatScreen.css'
function ChatScreen() {
    const [messages,setMessages]=useState([
        {
          name:'Hannah Mckay',
          image:"https://www.gstatic.com/tv/thumb/persons/505244/505244_v9_bb.jpg",
          message:"Hey How are you?"
},
{
    
    message:"Yeah everything's Fine..Can we meet Tonight?"
},
{
    name:'Hannah Mckay',
    image:"https://www.gstatic.com/tv/thumb/persons/505244/505244_v9_bb.jpg",
    message:"Okay..Let's Meet"
},
])
   const [input,setInput]=useState('')
   const handleMessage=(e)=>{
    e.preventDefault()
    if(input){
    setMessages([...messages,{message:input}]);
    setInput('')
    }
   }
    return (
        <div className="chatScreen">
            <p className="chatScreen_timestamp">You Matched with Hannah On 28-01-2021</p>
                    
          {messages.map((message)=>
          message.name?(
              <div className="chatScreen_message">
                  <Avatar 
                  className="chatScreen_avatar"
                  alt={message.name}
                  src={message.image}
                  />
                  <p className="chatScreen_text">{message.message}</p>
              </div>
          ):(
              <div className="chatScreen_message">
                                    <p className="chatScreen_textUser">{message.message}</p>

                  </div>
          )

          )}  
          <div className="input_div">
              <form className="input_form">
                  <input value={input} placeholder="Type a message" type="text"  onChange={e=>setInput(e.target.value)}
                   className="message_input"/>
                  <button className="message_button" type="submit" onClick={handleMessage}>SEND</button>
              </form>
          </div>
        </div>
    )
}

export default ChatScreen
