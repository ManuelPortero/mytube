import React from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from "@material-ui/icons/Search"; 
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon  from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar"; 
import './Header.css';
function Header() {
    return (
        <div className="header">
            <div className = "header__left">
                <MenuIcon />
                    <img
                    className = "header__logo"   
                    src = "https://i.ytimg.com/vi/zr7SnVq4tnc/maxresdefault.jpg"
                    alt="hola"/>          

            </div>
            
            <div className="header__input">
                <input placeholder ="Search" type="text" />
                <SearchIcon />
                
            </div>            

            <div className ="header__icons">

            <SearchIcon className ="header__inputButton"/>
             <VideoCallIcon className ="header__icon" />
             <AppsIcon className ="header__icon"/>
             <NotificationsIcon className ="header__icon" />
             <Avatar 
                alt="" src="" />

            </div> 
            
            
        </div>
    );
}
 


 export default Header
