import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import IconButton from '@material-ui/core/IconButton' 
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import './Header.css'
import { Link,useHistory } from 'react-router-dom';
function Header({backButton}) {
    const history=useHistory();
    return (
        <div className="header">
           {backButton ?(
               
               <IconButton onClick={()=>history.replace(backButton)}>
               <ArrowBackIosIcon fontSize="large" className="header_icon"/>
               </IconButton>
               
           ):(
            <Link to="/profile">
            <IconButton>
            <PersonIcon fontSize='large' className="header_icon"/>
            </IconButton>
            </Link>
           )}
            
            <Link to="/">
            <img src="https://1000logos.net/wp-content/uploads/2018/07/Tinder_logo_PNG1.png" className="tinder_logo"></img>
            </Link>
            <Link to="/chat">
            <IconButton>
            <QuestionAnswerIcon fontSize="large"  className="header_icon"/>
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
