import React from 'react';
import style from './Button.module.css';

const Button = ({text , onClick}) => {
    return (
            <button onClick={onClick} className={style.button}>
            <span>{text}</span>
            <img className={style.arrow} src="/Images/arrow-right-solid.svg" alt="" width="18px" />
          </button>
       
    )
}

export default Button
