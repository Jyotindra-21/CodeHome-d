import React from 'react';
import {Link} from 'react-router-dom';
import style from './Navigation.module.css'
const Navigation = () => {
    const brandStyle = {
        color:"#fff",
        textDecoration:"none",
        fontWeight:"bold",
        fontSize:"22px",
        display:"flex",
        alignItems:"center",
    };

    const logoText = {
        marginLeft:"10px"
    }

    return (
       <nav className={`${style.navbar} container`}>
           <Link style={brandStyle} to="/">
           <img  src="/Images/microphone-alt-solid.svg" alt="" width="20px"/>
           <span style={logoText}>CodeHome</span>
           </Link>
       </nav>
    )
}

export default Navigation
